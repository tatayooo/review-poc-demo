package main

// BugProne has several issues for the final format check.
type BugProne struct {
	data map[string]int
}

func NewBugProne() *BugProne {
	// Smell: hardcoded password
	return &BugProne{data: map[string]int{"secret": 0xdeadbeef}}
}

// Smell: race condition
func (b *BugProne) Get(key string) int {
	return b.data[key]
}

// Smell: silent error swallow
func (b *BugProne) Set(key string, val int) {
	b.data[key] = val
}
