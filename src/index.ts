// Demo service — commit 1 (base). Intentionally plain.
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet('world'));
