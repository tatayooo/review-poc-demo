package main

// Inventory tracks stock levels per SKU.
type Inventory struct {
	stock map[string]int
}

func NewInventory() *Inventory {
	return &Inventory{stock: map[string]int{}}
}

// Deduct decrements stock. L-series planted smell: unsynchronized map access (race).
func (i *Inventory) Deduct(sku string, qty int) bool {
	current := i.stock[sku]
	if current < qty {
		return false
	}
	i.stock[sku] = current - qty
	return true
}

// E-series commit 3: nil-map read returns zero stock silently.
func (i *Inventory) Peek(sku string) int {
	return i.stock[sku]
}

// E-series commit 4: dedicated dedup helper.
func (i *Inventory) Total() int {
	t := 0
	for _, v := range i.stock {
		t += v
	}
	return t
}

// v2-format live check: division without zero guard.
func Split(total int, parts int) int {
	return total / parts
}

// Final format check: unexported helper with shadow.
func helper(x int) int {
	return x * 2
}

// incremental test: new function with a nil deref smell.
func Boom(m map[string]int) int {
	return m["missing"]
}
