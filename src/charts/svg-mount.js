/**
 * Native SVG chart mounts for deml-ui (premium interaction, NFTS tokens).
 * Shared Y per [data-chart-board]; min 0 when series are non-negative.
 * CHART RULES LOCKED: CSS owns size (spark 144 / panel 280); width 100%.
 * viewBox is coordinate space only — never drives rendered height.
 */

let chartSeq = 0;

// --- Geometry (coordinate space; CSS --chart-height-* is the rendered size) ---
const VIEW = { w: 560, h: 280, padL: 32, padR: 12, padT: 14, padB: 26 };
const SPARK = { w: 560, h: 144, padL: 8, padR: 8, padT: 8, padB: 8 };

function parseJson(el, name, fallback) {
  const raw = el.getAttribute(name);
  if (raw == null || raw === "") return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function seriesFrom(el) {
  const values = parseJson(el, "data-series", []);
  const cats = parseJson(el, "data-categories", []);
  if (!Array.isArray(values)) return [];
  return values.map((value, i) => ({
    value: Number(value),
    label: String(cats[i] ?? i + 1),
  }));
}

function niceCeil(max) {
  if (!Number.isFinite(max) || max <= 0) return 1;
  const padded = max * 1.08;
  const mag = 10 ** Math.floor(Math.log10(padded));
  const norm = padded / mag;
  const step = norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 5 ? 5 : 10;
  return Math.ceil(norm / step) * step * mag;
}

/** Shared domain: min 0 (when data ≥ 0), one max across the board. */
export function computeSharedDomain(seriesList, { forceZero = true } = {}) {
  let min = Number.POSITIVE_INFINITY;
  let max = Number.NEGATIVE_INFINITY;
  for (const series of seriesList) {
    for (const p of series) {
      if (!Number.isFinite(p.value)) continue;
      if (p.value < min) min = p.value;
      if (p.value > max) max = p.value;
    }
  }
  if (!Number.isFinite(min) || !Number.isFinite(max)) return { min: 0, max: 1 };
  if (forceZero && min >= 0) min = 0;
  if (min === max) {
    const pad = max === 0 ? 1 : Math.abs(max) * 0.08 || 1;
    return { min: forceZero && min >= 0 ? 0 : min - pad, max: max + pad };
  }
  return { min, max: niceCeil(max) };
}

function mapY(value, domain, padT, innerH) {
  const span = domain.max - domain.min || 1;
  const t = (value - domain.min) / span;
  return padT + innerH - t * innerH;
}

function smoothLinePath(nodes) {
  if (!nodes.length) return "";
  if (nodes.length === 1) return `M${nodes[0].x},${nodes[0].y}`;
  if (nodes.length === 2) {
    return `M${nodes[0].x},${nodes[0].y} L${nodes[1].x},${nodes[1].y}`;
  }
  let d = `M${nodes[0].x.toFixed(2)},${nodes[0].y.toFixed(2)}`;
  for (let i = 0; i < nodes.length - 1; i++) {
    const p0 = nodes[i === 0 ? 0 : i - 1];
    const p1 = nodes[i];
    const p2 = nodes[i + 1];
    const p3 = nodes[i + 2] ?? p2;
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C${cp1x.toFixed(2)},${cp1y.toFixed(2)} ${cp2x.toFixed(2)},${cp2y.toFixed(2)} ${p2.x.toFixed(2)},${p2.y.toFixed(2)}`;
  }
  return d;
}

function layout(el, series, domain) {
  const frame = el.closest(
    ".area-chart-frame, .bar-chart-frame, .chart-figure__plot",
  );
  const variant =
    frame?.getAttribute("data-variant") ||
    el.getAttribute("data-variant") ||
    "panel";
  const spark = variant === "spark";
  const box = spark ? SPARK : VIEW;
  const innerW = box.w - box.padL - box.padR;
  const innerH = box.h - box.padT - box.padB;
  const floorY = box.padT + innerH;
  const step = series.length <= 1 ? 0 : innerW / (series.length - 1);
  const nodes = series.map((p, i) => ({
    x: box.padL + step * i,
    y: mapY(p.value, domain, box.padT, innerH),
    label: p.label,
    value: p.value,
  }));
  return {
    spark,
    box,
    floorY,
    nodes,
    padL: box.padL,
    padR: box.padR,
    padT: box.padT,
    innerH,
  };
}

function escapeAttr(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function buildAreaSvg(el, domain, { fill = true, points = true } = {}) {
  const series = seriesFrom(el);
  const { spark, box, floorY, nodes, padL } = layout(el, series, domain);
  const id = ++chartSeq;
  const gradId = `deml-chart-grad-${id}`;
  const glowId = `deml-chart-glow-${id}`;
  const line = smoothLinePath(nodes);
  const area =
    nodes.length > 0
      ? `${line} L${nodes[nodes.length - 1].x.toFixed(2)},${floorY.toFixed(2)} L${nodes[0].x.toFixed(2)},${floorY.toFixed(2)} Z`
      : "";
  const nodeR = spark ? 2.5 : 3.5;
  const viewRight = box.w - (spark ? 4 : 12);

  const hGrid = spark
    ? ""
    : [0.25, 0.5, 0.75]
        .map((t) => {
          const y = box.padT + (1 - t) * (floorY - box.padT);
          return `<line class="area-chart-grid-h" x1="${padL}" x2="${viewRight}" y1="${y.toFixed(2)}" y2="${y.toFixed(2)}" />`;
        })
        .join("");

  const vGrid = spark
    ? ""
    : nodes
        .map(
          (n) =>
            `<line class="area-chart-grid-v" x1="${n.x.toFixed(2)}" x2="${n.x.toFixed(2)}" y1="${box.padT}" y2="${floorY.toFixed(2)}" />`,
        )
        .join("");

  const axes = spark
    ? ""
    : `
      <line class="area-chart-baseline" x1="${padL}" x2="${viewRight}" y1="${floorY.toFixed(2)}" y2="${floorY.toFixed(2)}" />
      <text class="area-chart-y" x="4" y="${box.padT + 8}">${escapeAttr(String(Math.round(domain.max)))}</text>
      <text class="area-chart-y" x="4" y="${floorY.toFixed(2)}">${escapeAttr(String(Math.round(domain.min)))}</text>
      ${nodes
        .map(
          (n) =>
            `<text class="area-chart-x" x="${n.x.toFixed(2)}" y="${(box.h - 8).toFixed(2)}" text-anchor="middle">${escapeAttr(n.label)}</text>`,
        )
        .join("")}
    `;

  const nodeMarks =
    points && nodes.length
      ? nodes
          .map(
            (n) =>
              `<circle class="area-chart-node" cx="${n.x.toFixed(2)}" cy="${n.y.toFixed(2)}" r="${nodeR}" data-label="${escapeAttr(n.label)}" data-value="${n.value}" />`,
          )
          .join("")
      : "";

  return {
    html: `
    <svg class="area-chart" viewBox="0 0 ${box.w} ${box.h}" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="${gradId}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" class="area-chart-stop area-chart-stop--top" />
          <stop offset="55%" class="area-chart-stop area-chart-stop--mid" />
          <stop offset="100%" class="area-chart-stop area-chart-stop--bottom" />
        </linearGradient>
        <filter id="${glowId}" x="-20%" y="-40%" width="140%" height="180%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      ${hGrid}
      ${vGrid}
      ${fill && area ? `<path class="area-chart-fill" d="${area}" fill="url(#${gradId})" />` : ""}
      ${line ? `<path class="area-chart-line" d="${line}" fill="none" filter="url(#${glowId})" />` : ""}
      ${nodeMarks}
      ${axes}
      <line class="area-chart-cursor" hidden x1="0" x2="0" y1="${box.padT}" y2="${floorY.toFixed(2)}" />
    </svg>
    <div class="chart-tooltip" hidden role="tooltip"></div>
  `,
  };
}

function buildBarSvg(el, domain) {
  const series = seriesFrom(el);
  const { spark, box, floorY, padL, padT, innerH } = layout(el, series, domain);
  const innerW = box.w - padL - (spark ? 4 : 12);
  const gap = spark ? 8 : 12;
  const barW = series.length
    ? (innerW - gap * (series.length - 1)) / series.length
    : 0;
  const viewRight = box.w - (spark ? 4 : 12);

  const hGrid = spark
    ? ""
    : [0.25, 0.5, 0.75]
        .map((t) => {
          const y = padT + (1 - t) * (floorY - padT);
          return `<line class="area-chart-grid-h" x1="${padL}" x2="${viewRight}" y1="${y.toFixed(2)}" y2="${y.toFixed(2)}" />`;
        })
        .join("");

  const bars = series
    .map((p, i) => {
      const x = padL + i * (barW + gap);
      const y = mapY(p.value, domain, padT, innerH);
      const h = Math.max(floorY - y, 2);
      return `<rect class="bar-chart-col" x="${x.toFixed(2)}" y="${y.toFixed(2)}" width="${barW.toFixed(2)}" height="${h.toFixed(2)}" rx="0" ry="0" data-label="${escapeAttr(p.label)}" data-value="${p.value}" />`;
    })
    .join("");

  const labels = spark
    ? ""
    : `
      <line class="area-chart-baseline" x1="${padL}" x2="${viewRight}" y1="${floorY.toFixed(2)}" y2="${floorY.toFixed(2)}" />
      <text class="area-chart-y" x="4" y="${padT + 8}">${escapeAttr(String(Math.round(domain.max)))}</text>
      <text class="area-chart-y" x="4" y="${floorY.toFixed(2)}">${escapeAttr(String(Math.round(domain.min)))}</text>
      ${series
        .map((p, i) => {
          const x = padL + i * (barW + gap) + barW / 2;
          return `<text class="area-chart-x" x="${x.toFixed(2)}" y="${(box.h - 8).toFixed(2)}" text-anchor="middle">${escapeAttr(p.label)}</text>`;
        })
        .join("")}
    `;

  return {
    html: `
    <svg class="area-chart bar-chart-svg" viewBox="0 0 ${box.w} ${box.h}" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      ${hGrid}
      ${bars}
      ${labels}
    </svg>
    <div class="chart-tooltip" hidden role="tooltip"></div>
  `,
  };
}

function wireTooltip(host) {
  const tip = host.querySelector(".chart-tooltip");
  const cursor = host.querySelector(".area-chart-cursor");
  if (!tip) return;

  const show = (label, value, clientX, clientY, cursorX) => {
    tip.hidden = false;
    tip.innerHTML = `<span class="chart-tooltip__label">${escapeAttr(label)}</span><strong class="chart-tooltip__value">${escapeAttr(String(value))}</strong>`;
    const rect = host.getBoundingClientRect();
    tip.style.left = `${Math.min(Math.max(clientX - rect.left + 12, 8), rect.width - 96)}px`;
    tip.style.top = `${Math.max(clientY - rect.top - 36, 4)}px`;
    if (cursor && cursorX != null) {
      cursor.removeAttribute("hidden");
      cursor.setAttribute("x1", String(cursorX));
      cursor.setAttribute("x2", String(cursorX));
    }
  };

  const hide = () => {
    tip.hidden = true;
    cursor?.setAttribute("hidden", "");
  };

  host.querySelectorAll(".area-chart-node, .bar-chart-col").forEach((node) => {
    node.addEventListener("pointerenter", (e) => {
      const label = node.getAttribute("data-label") || "";
      const value = node.getAttribute("data-value") || "";
      const cx = node.getAttribute("cx");
      show(label, value, e.clientX, e.clientY, cx != null ? Number(cx) : null);
    });
    node.addEventListener("pointerleave", hide);
  });
}

function mountOne(el, domain) {
  const kind = (el.getAttribute("data-chart") || "area").toLowerCase();
  let built;
  if (kind === "bar") built = buildBarSvg(el, domain);
  else if (kind === "line")
    built = buildAreaSvg(el, domain, { fill: false, points: true });
  else built = buildAreaSvg(el, domain, { fill: true, points: true });

  el.innerHTML = built.html;
  el.dataset.chartMounted = "true";
  wireTooltip(el);
}

/**
 * Mount every [data-chart] under root. Boards share one Y domain.
 */
export function initSvgCharts(root = document) {
  const boards = [...root.querySelectorAll("[data-chart-board]")];

  if (boards.length) {
    for (const board of boards) {
      const charts = [...board.querySelectorAll("[data-chart]")];
      const seriesList = charts.map(seriesFrom);
      const pinned = board.getAttribute("data-chart-ymax");
      let domain = computeSharedDomain(seriesList);
      if (pinned && pinned !== "auto") {
        const max = Number(pinned);
        if (Number.isFinite(max) && max > 0) domain = { min: 0, max };
      }
      board.querySelectorAll("[data-chart]").forEach((el) => mountOne(el, domain));
    }
    root.querySelectorAll("[data-chart]").forEach((el) => {
      if (el.closest("[data-chart-board]")) return;
      const series = seriesFrom(el);
      mountOne(el, computeSharedDomain([series]));
    });
    return;
  }

  const mounts = [...root.querySelectorAll("[data-chart]")];
  if (!mounts.length) return;
  const seriesList = mounts.map(seriesFrom);
  const domain = computeSharedDomain(
    seriesList.length ? seriesList : [[{ value: 1 }]],
  );
  mounts.forEach((el) => mountOne(el, domain));
}

export { seriesFrom, niceCeil };
