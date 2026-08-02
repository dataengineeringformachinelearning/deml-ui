#!/usr/bin/env node
/**
 * Git/npm installs run `prepare`. Skip the full rebuild when dist artifacts
 * are already present (committed for github: consumers) so downstream CI
 * (e.g. deml on Vercel 8GB) does not OOM building deml-ui twice.
 */
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const required = [
  'dist/styles/deml-ui.css',
  'dist/styles/tokens.css',
  'dist/angular/fesm2022/deml-ui.mjs',
  'dist/web-components/deml-ui.js',
];

const missing = required.filter((rel) => !fs.existsSync(path.join(root, rel)));
if (missing.length === 0 && process.env.DEML_UI_FORCE_PREPARE !== '1') {
  console.log('deml-ui: dist artifacts present — skipping prepare build');
  process.exit(0);
}

if (missing.length) {
  console.log(`deml-ui: missing ${missing.join(', ')} — running full build`);
}

const result = spawnSync('npm', ['run', 'build'], {
  cwd: root,
  stdio: 'inherit',
  env: process.env,
});
process.exit(result.status ?? 1);
