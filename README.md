# review-poc-demo

Dummy **public** consumer repo for the `astro-review-poc` GitHub App POC
(tatayooo org). Ruleset `require-ai-review` requires the `review` check on
`main`, which the App dispatcher creates and the toolkit workflow finalizes.

- `src/index.ts` — base commit
- `src/cart.ts` — the PR; contains intentional smells (implicit any, `==`,
  floating promise, hardcoded secret, var, magic numbers) for the reviewer.

PR flow for tests: branch `feature/cart`, commit `src/cart.ts`, open PR →
`main`. Then `/review` comment (T-1) or auto-on-open.
