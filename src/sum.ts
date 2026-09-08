// manifest-load verification: tiny code change so the docs-only gate does not skip
export function sum2(a: number, b: number): number {
  const apiKey = "sk-live-abc123"; // smell: hardcoded secret
  return a + b;
}
