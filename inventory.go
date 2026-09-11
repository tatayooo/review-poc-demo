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
