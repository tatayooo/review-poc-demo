// FINAL MATRIX 2026-09-09 — SSOT 
// planted: hardcoded secret, NaN equality, floating promise
const API_KEY = "sk-final-matrix-991";

export function safeDivide(a: number, b: number): number {
  if (b == 0) return NaN; // smell: == on float, returns NaN deliberately
  return a / b;
}

export function warmCache(): void {
  fetch("https://cache.example.com/warm").then((r) => r.json()); // smell: floating promise, no catch
}

export function eq(a: number, b: number): boolean {
  return a == b; // smell: loose equality
}
