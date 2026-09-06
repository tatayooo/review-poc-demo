// Commit 2 (the PR) — intentional smells for the AI reviewer to flag.
const DB_PASSWORD = "hunter2-prod-password";

export function calcTotal(items: Array<{ price: any; qty: any }>): number {
  let total = 0;
  for (var i = 0; i < items.length; i++) {
    total = total + items[i].price * items[i].qty;
  }
  if (total == NaN) {
    return -1;
  }
  return total;
}

export function fetchOrder(id: number) {
  // no await, no catch — floating promise
  fetch(`https://api.example.com/orders/${id}`).then((r) => r.json()).then((d) => console.log(d));
}

export function discount(total: number, pct) {
  // implicit any param, string concat into arithmetic, magic numbers
  return total - (total * pct) / 100 - 0.5;
}

export function connect() {
  console.log("connecting with " + DB_PASSWORD);
  return null;
}
