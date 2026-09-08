// Demo service — commit 1 (base). Intentionally plain.
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet('world'));
// trailing commit for S-3 test
// phase-2 marker: cloud run path 2120
// i7 push-mode trigger
