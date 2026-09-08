// auto-dispatch test — intentional smell: eval of user input
export function runExpr(expr: string): unknown {
  return eval(expr);
}
