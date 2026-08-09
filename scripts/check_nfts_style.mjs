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
  /* light-theme AA solids */
  '23486d',
  '2f5540',
  '7a3038',
  /* dark status label inks (AA on ash ground) */
  '9bc4a8',
  'e8a0a6',
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
    if (!/--chart-height-spark\s*:\s*144px\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --chart-height-spark: 144px (8px grid)');
    }
    if (!/--chart-height-panel\s*:\s*280px\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --chart-height-panel: 280px');
    }
    if (/--space-half\s*:/.test(tokens)) {
      fail('styles/tokens.css must not define --space-half (strict 8px grid — no half-steps)');
    }
    if (!/--tile-gap\s*:\s*var\(--space-2\)\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --tile-gap: var(--space-2) (equal board gutters)');
    }
    if (!/--elevation-2\s*:\s*0 16px 32px/.test(tokens)) {
      fail('styles/tokens.css --elevation-2 Y/blur must be 16px/32px (8px grid)');
    }
    if (!/--module-accent-width\s*:\s*var\(--space-1\)\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --module-accent-width: var(--space-1)');
    }
    if (!/--enter-distance\s*:\s*var\(--space-1\)\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --enter-distance: var(--space-1)');
    }
    if (!/--uptime-seg-min\s*:\s*var\(--space-1\)\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --uptime-seg-min: var(--space-1)');
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
      fail('styles/tokens.css must set --font-weight-display: 800 (display presence)');
    }
    if (!/--tracking-mark\s*:\s*0\.28em\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --tracking-mark: 0.28em (measured mark caps)');
    }
    if (!/--tracking-intro\s*:\s*0\.1em\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --tracking-intro: 0.1em');
    }
    if (!/--font-size-display-min\s*:\s*var\(--space-5\)\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --font-size-display-min: var(--space-5)');
    }
    if (!/--font-size-display\s*:\s*var\(--space-8\)\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --font-size-display: var(--space-8)');
    }
    if (!/--reading-width\s*:\s*60ch\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --reading-width: 60ch');
    }
    if (!/--intro-width\s*:\s*38ch\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --intro-width: 38ch');
    }
    if (!/--leading-body\s*:\s*1\.62\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --leading-body: 1.62');
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
    if (!/--color-success-ink\s*:/.test(tokens)) {
      fail('styles/tokens.css must define --color-success-ink (status labels on page ground)');
    }
    if (!/--color-error-ink\s*:/.test(tokens)) {
      fail('styles/tokens.css must define --color-error-ink (status labels on page ground)');
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

// --- 3) Fixed-only grid-auto-rows (squash) + ragged min-content rows ---
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
      if (/grid-auto-rows\s*:\s*minmax\s*\(\s*min-content/.test(line)) {
        fail(
          `Ragged min-content rows forbidden (use minmax(var(--tile-row-*), …)): ${rel(p)}:${i + 1}`,
        );
      }
    });
  }
}

// --- 3b) Strict 8px spacing — no half-steps / hairline-as-gap / invented px pads ---
{
  const padProps =
    /(?:padding|margin|gap|row-gap|column-gap|inset|(?<![a-z-])(?:top|right|bottom|left))\s*:/;
  for (const p of walk(join(ROOT, 'components'))) {
    if (extname(p) !== '.css') continue;
    const r = rel(p);
    const text = read(p);
    if (/--space-half|var\(--space-half\)/.test(text)) {
      fail(`Forbidden --space-half (use --space-1+): ${r}`);
    }
    if (/gap\s*:\s*var\(--hairline\)/.test(text)) {
      fail(`Forbidden gap: var(--hairline) — strokes are not spacing: ${r}`);
    }
    if (/color-olive|--gutter\b|--text-primary\b|--bg-primary\b/.test(text)) {
      fail(`Undefined / non-token chrome var in ${r}`);
    }
    const lines = text.split('\n');
    lines.forEach((line, i) => {
      // Skip stroke / focus / sr-only clip offsets (not layout spacing)
      if (
        /outline-offset|border(?:-width)?\s*:|box-shadow\s*:|stroke-width|clip\s*:|visually-hidden/.test(
          line,
        )
      ) {
        return;
      }
      if (!padProps.test(line)) return;
      // sr-only pattern: width/height 1px + margin -1px
      if (/^\s*(?:width|height)\s*:\s*1px\s*;?\s*$/.test(line)) return;
      if (/^\s*margin\s*:\s*-1px\s*;?\s*$/.test(line)) return;
      // Bare px in spacing props — allow 0 only (8px multiples otherwise)
      const px = [...line.matchAll(/(-?\d+(?:\.\d+)?)px/g)].map((m) => Number(m[1]));
      for (const n of px) {
        if (n === 0) continue;
        if (n % 8 !== 0) {
          fail(`Spacing value ${n}px not on 8px grid: ${r}:${i + 1}`);
        }
      }
      // Fractional grid multipliers (e.g. * 0.5, * 3.5) in spacing
      if (/var\(--grid\)\s*\*\s*(0\.|1\.5|2\.5|3\.5|4\.5|5\.5|6\.5)/.test(line)) {
        fail(`Fractional --grid multiplier in spacing: ${r}:${i + 1}`);
      }
    });
  }
  // styles shell + tokens already checked; also scan styles/*.css spacing
  for (const p of walk(join(ROOT, 'styles'))) {
    if (extname(p) !== '.css') continue;
    const r = rel(p);
    const text = read(p);
    if (r.endsWith('tokens.css')) continue;
    if (/--space-half|var\(--space-half\)/.test(text)) {
      fail(`Forbidden --space-half in ${r}`);
    }
  }
}

// --- 3c) Equal-height board contracts ---
{
  const required = [
    ['components/form-grid/form-grid.css', /grid-auto-rows\s*:\s*minmax\s*\(\s*var\(--tile-row/],
    ['components/explore-card/explore-card.css', /\.explore-directory[\s\S]*grid-auto-rows\s*:\s*minmax/],
    ['components/card-grid/card-grid.css', /data-density='compact'[\s\S]*minmax\s*\(\s*var\(--tile-row/],
    ['components/dashboard-grid/dashboard-grid.css', /grid-auto-rows\s*:\s*minmax\s*\(\s*var\(--dash-row/],
  ];
  for (const [relPath, re] of required) {
    const p = join(ROOT, relPath);
    if (!existsSync(p)) {
      fail(`Missing board CSS: ${relPath}`);
      continue;
    }
    if (!re.test(read(p))) {
      fail(`Equal-height board contract missing in ${relPath}`);
    }
  }
}

// --- 4) Chart stages — absolute fixed heights (never squash / stretch / aspect) ---
{
  const chartCssFiles = [
    'components/area-chart/area-chart.css',
    'components/bar-chart/bar-chart.css',
    'components/chart/chart.css',
    'components/chart-card/chart-card.css',
    'components/chart-panel/chart-panel.css',
    'components/chart-empty-state/chart-empty-state.css',
    'components/stat-card/stat-card.css',
  ];

  for (const relPath of chartCssFiles) {
    const p = join(ROOT, relPath);
    if (!existsSync(p)) {
      fail(`Missing required chart CSS: ${relPath}`);
      continue;
    }
    const text = read(p);
    if (!/CHART RULES LOCKED/.test(text)) {
      fail(`${relPath} must include CHART RULES LOCKED comment`);
    }
    if (/aspect-ratio\s*:\s*var\(--chart-(?:spark-)?aspect\)/.test(text)) {
      fail(`${relPath} must not size via --chart-aspect (fixed heights only)`);
    }
    // Uneven frame padding breaks equal-inset law (tooltips may use compact pad)
    if (
      /\.area-chart-frame[\s\S]{0,200}?padding\s*:\s*var\(--space-1\)\s+var\(--space-2\)/.test(
        text,
      )
    ) {
      fail(`${relPath} frame must not use uneven padding — use equal --chart-inset(-spark)`);
    }
  }

  const areaCss = join(ROOT, 'components/area-chart/area-chart.css');
  if (existsSync(areaCss)) {
    const text = read(areaCss);
    if (!/var\(--chart-height-spark\)/.test(text)) {
      fail('components/area-chart/area-chart.css must use var(--chart-height-spark)');
    }
    if (!/var\(--chart-height-panel\)/.test(text)) {
      fail('components/area-chart/area-chart.css must use var(--chart-height-panel)');
    }
    if (!/var\(--chart-inset-spark\)/.test(text)) {
      fail('components/area-chart/area-chart.css must use equal var(--chart-inset-spark)');
    }
    if (!/min-height\s*:\s*var\(--chart-height-spark\)/.test(text)) {
      fail('components/area-chart/area-chart.css must lock min-height to spark token');
    }
    if (!/max-height\s*:\s*var\(--chart-height-spark\)/.test(text)) {
      fail('components/area-chart/area-chart.css must lock max-height to spark token');
    }
  }

  const barCss = join(ROOT, 'components/bar-chart/bar-chart.css');
  if (existsSync(barCss)) {
    const text = read(barCss);
    if (!/var\(--chart-height-panel\)/.test(text) || !/var\(--chart-height-spark\)/.test(text)) {
      fail('components/bar-chart/bar-chart.css must lock spark + panel heights');
    }
    // List mode must not grow with data
    if (
      /\.bar-chart:not\(\[data-chart\]\)[\s\S]{0,400}?height\s*:\s*auto/.test(text)
    ) {
      fail(
        'components/bar-chart/bar-chart.css list mode must not use height:auto (data-driven height forbidden)',
      );
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

  const chartCard = join(ROOT, 'components/chart-card/chart-card.css');
  if (existsSync(chartCard)) {
    const text = read(chartCard);
    if (!/--chart-height-panel|--chart-height-spark/.test(text)) {
      fail(
        'components/chart-card/chart-card.css must document/lock fixed --chart-height-* contract',
      );
    }
  }

  // SVG mount — coordinate space must track locked CSS heights
  const mount = join(ROOT, 'src/charts/svg-mount.js');
  if (!existsSync(mount)) {
    fail('Missing src/charts/svg-mount.js');
  } else {
    const text = read(mount);
    if (!/CHART RULES LOCKED/.test(text)) {
      fail('src/charts/svg-mount.js must include CHART RULES LOCKED comment');
    }
    if (!/h:\s*144\b/.test(text)) {
      fail('src/charts/svg-mount.js SPARK viewBox height must be 144 (match --chart-height-spark)');
    }
    if (!/h:\s*280\b/.test(text)) {
      fail('src/charts/svg-mount.js VIEW viewBox height must be 280 (match --chart-height-panel)');
    }
    if (/\b140\b/.test(text) && /SPARK[\s\S]{0,80}140/.test(text)) {
      fail('src/charts/svg-mount.js must not keep SPARK height 140 (use 144)');
    }
  }

  // Tokens — equal insets declared
  const tokensPath = join(ROOT, 'styles/tokens.css');
  if (existsSync(tokensPath)) {
    const tokens = read(tokensPath);
    if (!/--chart-inset-spark\s*:\s*var\(--space-2\)\s*;/.test(tokens)) {
      fail('styles/tokens.css must set --chart-inset-spark: var(--space-2)');
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
