#!/usr/bin/env node
/**
 * NFTS (new-from-the-start / warm ash) style enforcement for deml-ui.
 * Fails on drift from the locked warm-ash contract.
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const errors = [];

const REQUIRED_HEX = [
  '35312d',
  '1c1916',
  'f3f0ea',
  'd4cec5',
  '2f5f8f',
  '3f6b54',
  '9e3d47',
];

const IGNORE_DIR_NAMES = new Set([
  'node_modules',
  'dist',
  '.git',
  'storybook-static',
  'coverage',
]);

function fail(msg) {
  errors.push(msg);
}

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    if (IGNORE_DIR_NAMES.has(name)) continue;
    const p = join(dir, name);
    let st;
    try {
      st = statSync(p);
    } catch {
      continue;
    }
    if (st.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

function rel(p) {
  return relative(ROOT, p).split('\\').join('/');
}

function read(p) {
  return readFileSync(p, 'utf8');
}

// --- 1) tokens must lock NFTS palette + chart aspect + Geist ---
{
  const tokensPath = join(ROOT, 'styles/tokens.css');
  if (!existsSync(tokensPath)) {
    fail('styles/tokens.css missing');
  } else {
    const tokens = read(tokensPath);
    const lower = tokens.toLowerCase();
    for (const hex of REQUIRED_HEX) {
      if (!lower.includes(`#${hex}`)) {
        fail(`styles/tokens.css missing required NFTS hex #${hex}`);
      }
    }
    if (!/--chart-aspect\s*:\s*2\.4\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --chart-aspect: 2.4');
    }
    if (!/Geist/i.test(tokens)) {
      fail('styles/tokens.css must use Geist font family');
    }
    // Mentions in "no Syne / Fraunces" comments are OK; live font stacks are not.
    const tokensNoComments = tokens.replace(/\/\*[\s\S]*?\*\//g, '');
    if (/\bSyne\b|\bFraunces\b/.test(tokensNoComments)) {
      fail('styles/tokens.css must not use Syne or Fraunces in live declarations');
    }
    if (/--font-display\s*:\s*(?!var\(--font-sans\)|var\(--font-family\))/.test(tokens)) {
      // Soft check: display should resolve via sans/family (Geist)
      if (!/--font-display\s*:\s*var\(--font-/.test(tokens)) {
        fail('styles/tokens.css --font-display must resolve to Geist stack vars');
      }
    }
  }
}

// --- 2) Forbidden Viking / void-black electric chrome ---
{
  const roots = ['styles', 'components', 'src', 'stories', '.storybook'].map((d) =>
    join(ROOT, d),
  );
  const bad =
    /viking-ui|--viking-|\bviking-[a-z]+|#2176ff|#0066b2/i;
  for (const root of roots) {
    for (const p of walk(root)) {
      const r = rel(p);
      const ext = extname(p);
      if (!['.css', '.ts', '.html', '.js', '.mjs', '.mdx', '.md'].includes(ext)) {
        continue;
      }
      // Standards docs may say "do not reintroduce viking"
      if (
        (r.endsWith('AGENTS.md') || r.endsWith('.cursorrules') || r.endsWith('README.md')) &&
        !/import .*viking|from ['"].*viking/i.test(read(p))
      ) {
        if (/#2176ff|#0066b2/i.test(read(p)) && /forbidden|do not|retired|never/i.test(read(p))) {
          continue;
        }
        if (/viking/i.test(read(p)) && /forbidden|do not|retired|never|no viking/i.test(read(p))) {
          continue;
        }
      }
      const text = read(p);
      if (bad.test(text)) {
        // Allow explicit "forbidden" mentions in Introduction stories
        if (
          /forbidden|do not|retired|never|no viking|do not reintroduce/i.test(text) &&
          !/addEventListener\(\s*['"]viking-|--viking-[a-z]/i.test(text)
        ) {
          continue;
        }
        fail(`Forbidden Viking / cold-palette chrome: ${r}`);
      }
    }
  }
}

// --- 3) Fixed-only grid-auto-rows (squash) ---
{
  for (const p of walk(join(ROOT, 'components'))) {
    if (extname(p) !== '.css') continue;
    const text = read(p);
    const lines = text.split('\n');
    lines.forEach((line, i) => {
      if (/grid-auto-rows\s*:/.test(line) && !/minmax\s*\(/.test(line)) {
        fail(
          `Fixed-only grid-auto-rows (use minmax(..., auto)): ${rel(p)}:${i + 1}`,
        );
      }
    });
  }
}

// --- 4) Chart stages must not max-height squash the aspect contract ---
{
  const chartFiles = walk(join(ROOT, 'components')).filter(
    (p) =>
      extname(p) === '.css' &&
      /\/(area-chart|bar-chart|chart|chart-card|chart-panel|chart-empty-state)\//.test(
        rel(p),
      ),
  );
  for (const p of chartFiles) {
    const text = read(p);
    // Flag stage/frame max-height that fights aspect (common squash anti-pattern)
    if (
      /\.area-chart-frame|\.chart-figure__plot|\.chart-card__plot|\.chart-stage/.test(
        text,
      ) &&
      /max-height\s*:\s*(?!none)\S+/.test(text) &&
      /aspect-ratio\s*:\s*var\(--chart-aspect\)/.test(text)
    ) {
      // Allow max-height: none explicitly; fail other max-height on same file near frames
      const stageBlocks = text.split(/[{}]/);
      for (let i = 0; i < stageBlocks.length; i++) {
        const block = stageBlocks[i];
        if (
          /area-chart-frame|chart-figure__plot|chart-card__plot|chart-stage/.test(
            block,
          )
        ) {
          const body = stageBlocks[i + 1] || '';
          if (/max-height\s*:\s*(?!none\b)[^;]+;/.test(body)) {
            fail(
              `Chart stage max-height squash (keep aspect-driven height): ${rel(p)}`,
            );
          }
          if (/height\s*:\s*100%\s*;/.test(body) && /aspect-ratio/.test(body)) {
            fail(
              `Chart stage height:100% with aspect-ratio (use height:auto): ${rel(p)}`,
            );
          }
        }
      }
    }
  }
}

// --- 5) Require chart-aspect contract on plot frames / hosts ---
{
  const mustDeclareAspect = [
    'components/area-chart/area-chart.css',
    'components/chart/chart.css',
  ];
  for (const relPath of mustDeclareAspect) {
    const p = join(ROOT, relPath);
    if (!existsSync(p)) {
      fail(`Missing required chart component CSS: ${relPath}`);
      continue;
    }
    const text = read(p);
    if (!/var\(--chart-aspect\)/.test(text)) {
      fail(`${relPath} must use var(--chart-aspect)`);
    }
  }
  const chartCard = join(ROOT, 'components/chart-card/chart-card.css');
  if (!existsSync(chartCard)) {
    fail('Missing required chart component CSS: components/chart-card/chart-card.css');
  } else if (!/--chart-aspect/.test(read(chartCard))) {
    fail(
      'components/chart-card/chart-card.css must document/lock --chart-aspect plot contract',
    );
  }
}

if (errors.length) {
  console.error('NFTS style gate FAILED — deml-ui must stay warm ash only.\n');
  for (const e of errors) console.error(`  ✗ ${e}`);
  console.error(`\n${errors.length} violation(s). See AGENTS.md / .cursorrules.`);
  process.exit(1);
}

console.log('NFTS style gate passed — deml-ui warm ash contract intact.');
process.exit(0);
