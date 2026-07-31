let demlIdSeq = 0;

/**
 * Creates a unique, stable DOM id prefix for accessibility wiring
 * (`aria-controls`, `aria-labelledby`, etc.).
 */
export function demlId(prefix = "deml"): string {
  demlIdSeq += 1;
  return `${prefix}-${demlIdSeq}`;
}
