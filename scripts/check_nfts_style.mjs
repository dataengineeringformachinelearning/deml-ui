#!/usr/bin/env node
/**
 * NFTS (new-from-the-start / warm ash) style enforcement for deml-ui.
 * Fails on drift from the locked warm-ash contract.
 *
 * CHART RULES LOCKED: height fixed, width 100%, shared global scale – DO NOT CHANGE
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

// --- 1) tokens must lock NFTS palette + fixed chart heights + Geist ---
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
    if (!/--chart-height-spark\s*:\s*140px\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --chart-height-spark: 140px');
    }
    if (!/--chart-height-panel\s*:\s*280px\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --chart-height-panel: 280px');
    }
    if (!/--chart-stage-ink\s*:\s*var\(--color-plot-stage\)\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --chart-stage-ink: var(--color-plot-stage)');
    }
    if (!/--color-plot-stage\s*:\s*#121212\s*;/i.test(tokens)) {
      fail('styles/tokens.css must set --color-plot-stage: #121212 (activity-graph stage)');
    }
    if (!/Geist/i.test(tokens)) {
      fail('styles/tokens.css must use Geist font family');
    }
    if (!/--font-weight-display\s*:\s*800\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --font-weight-display: 800 (dense display)');
    }
    if (!/--tracking-mark\s*:\s*0\.24em\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --tracking-mark: 0.24em (wide mark caps)');
    }
    if (!/--tracking-intro\s*:\s*0\.08em\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --tracking-intro: 0.08em');
    }
    if (!/--module-pad\s*:\s*var\(--space-3\)\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --module-pad: var(--space-3) (equal module inset)');
    }
    if (!/--module-pad-lg\s*:\s*var\(--space-4\)\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --module-pad-lg: var(--space-4)');
    }
    if (!/--grid\s*:\s*8px\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --grid: 8px');
    }
    if (!/--hit-target\s*:\s*var\(--space-6\)\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --hit-target: var(--space-6) (≥44px WCAG)');
    }
    const tokensNoComments = tokens.replace(/\/\*[\s\S]*?\*\//g, '');
    if (/\bSyne\b|\bFraunces\b/.test(tokensNoComments)) {
      fail('styles/tokens.css must not use Syne or Fraunces in live declarations');
    }
    if (/--font-display\s*:\s*(?!var\(--font-sans\)|var\(--font-family\))/.test(tokens)) {
      if (!/--font-display\s*:\s*var\(--font-/.test(tokens)) {
        fail('styles/tokens.css --font-display must resolve to Geist stack vars');
      }
    }
  }
}

// --- 1b) Forbidden external brand / inspiration labels in product sources ---
{
  const roots = ['styles', 'components', 'src', 'stories', '.storybook', 'scripts'].map((d) =>
    join(ROOT, d),
  );
  const brands =
    /\bspotify\b|\bporsche\b|\bpalantir\b|\bspacex\b|\bmaterial design\b|\bbootstrap\b|\btailwind\b|\bfrench\b|\bamerican heritage\b|\batelier\b/i;
  for (const root of roots) {
    for (const p of walk(root)) {
      const r = rel(p);
      const ext = extname(p);
      if (!['.css', '.ts', '.html', '.js', '.mjs', '.mdx', '.md'].includes(ext)) continue;
      if (r.endsWith('check_nfts_style.mjs')) continue;
      const text = read(p);
      if (brands.test(text)) {
        fail(`Forbidden brand / inspiration label in source: ${r}`);
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
        if (
          /forbidden|do not|retired|never|no viking|do not reintroduce/i.test(text) &&
          !/addEventListener\(\s*['"]viking-|--viking-[a-z]/i.test(text)
        ) {
          continue;
        }
        fail(`Forbidden Viking / cold-palette chrome: ${r}`);
      }
      // #121212 only allowed as --color-plot-stage / chart stage ink token
      if (/#121212/i.test(text) && !/--color-plot-stage|#121212 \(activity/.test(text)) {
        const bare = text.replace(/--color-plot-stage\s*:\s*#121212/gi, '');
        if (/#121212/i.test(bare) && !/activity-graph stage|chart stage/i.test(text)) {
          fail(`#121212 only allowed as --color-plot-stage (chart stage ink): ${r}`);
        }
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

// --- 4) Line chart stages must use fixed heights (not aspect-driven) ---
{
  const areaCss = join(ROOT, 'components/area-chart/area-chart.css');
  if (!existsSync(areaCss)) {
    fail('Missing required chart component CSS: components/area-chart/area-chart.css');
  } else {
    const text = read(areaCss);
    if (!/var\(--chart-height-spark\)/.test(text)) {
      fail('components/area-chart/area-chart.css must use var(--chart-height-spark)');
    }
    if (!/var\(--chart-height-panel\)/.test(text)) {
      fail('components/area-chart/area-chart.css must use var(--chart-height-panel)');
    }
    if (/aspect-ratio\s*:\s*var\(--chart-aspect\)/.test(text)) {
      fail(
        'components/area-chart/area-chart.css must not size via --chart-aspect (fixed heights only)',
      );
    }
    if (!/CHART RULES LOCKED/.test(text)) {
      fail('components/area-chart/area-chart.css must include CHART RULES LOCKED comment');
    }
  }

  const panelCss = join(ROOT, 'components/chart-panel/chart-panel.css');
  if (existsSync(panelCss)) {
    const text = read(panelCss);
    if (!/var\(--chart-height-panel\)/.test(text)) {
      fail('components/chart-panel/chart-panel.css must use var(--chart-height-panel)');
    }
  }

  const chartCss = join(ROOT, 'components/chart/chart.css');
  if (existsSync(chartCss)) {
    const text = read(chartCss);
    if (!/var\(--chart-height-panel\)/.test(text)) {
      fail('components/chart/chart.css must use var(--chart-height-panel)');
    }
  }
}

// --- 5) Chart card documents fixed-height contract ---
{
  const chartCard = join(ROOT, 'components/chart-card/chart-card.css');
  if (!existsSync(chartCard)) {
    fail('Missing required chart component CSS: components/chart-card/chart-card.css');
  } else {
    const text = read(chartCard);
    if (!/--chart-height-panel|--chart-height-spark/.test(text)) {
      fail(
        'components/chart-card/chart-card.css must document/lock fixed --chart-height-* contract',
      );
    }
    if (!/CHART RULES LOCKED/.test(text)) {
      fail('components/chart-card/chart-card.css must include CHART RULES LOCKED comment');
    }
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
