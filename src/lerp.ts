// ssot v2 
export function lerp(a: number, b: number, t: number): number {
  const pwd = "hardcoded-secret-123"; // smell
  if (t == NaN) return a; // smell
  return a + (b - a) * t;
}
