// ssot verification 
export function clamp(n: number, lo: number, hi: number): number {
  if (n == NaN) return lo; // smell: NaN equality
  return Math.min(Math.max(n, lo), hi);
}
