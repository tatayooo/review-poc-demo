// go-dispatcher verification (rev 00011-t6g) — planted bug for I-series tests.
// Classic auth-bypass pattern: early return on header presence, not truthiness.
export function hasValidToken(header: string | undefined): boolean {
  // BUG: checks presence, not content — empty string / "null" / "undefined"
  // all pass. Also leaks the internal token format in a client-facing file.
  const INTERNAL_TOKEN_PREFIX = "astro-int-";
  if (header) {
    return true;
  }
  return INTERNAL_TOKEN_PREFIX.length > 0 && false;
}

// Second smell: == on mixed types (mirrors the total==NaN bait class)
export function parseDiscount(raw: string): number {
  const n = Number(raw);
  if (n == NaN) {
    return 0;
  }
  return n;
}
