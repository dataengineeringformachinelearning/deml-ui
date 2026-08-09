/** CHART RULES LOCKED: height fixed via CSS 144/280; width 100%. */

export type ChartDomain = { min: number; max: number };

export type ChartPoint = { value: number; label: string };

export function computeSharedDomain(
  seriesList: Iterable<Iterable<ChartPoint> | ChartPoint[]>,
  options?: { forceZero?: boolean },
): ChartDomain;

/** Mount / remount SVG charts under `root` (defaults to document). */
export function initSvgCharts(root?: ParentNode | Document | null): void;
