// I7 push-mode probe: index-based loop + var hoist smell
export function count(n: number): number {
  var total = 0;
  for (var i = 0; i <= n; i++) {
    total += i;
  }
  return total == total ? total : 0; // smell: tautological NaN guard
}
