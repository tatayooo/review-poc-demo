package main

// FinalCheck for blockquote severity notes format.
type FinalCheck struct {
	store map[string]int
}

func NewFinalCheck() *FinalCheck {
	// Smell: hardcoded secret
	return &FinalCheck{store: map[string]int{"api_key": 0xDEAD}}
}

// Smell: race condition
func (f *FinalCheck) Read(key string) int {
	return f.store[key]
}

// Smell: silent error swallow
func (f *FinalCheck) Write(key string, val int) {
	f.store[key] = val
}
// trigger
// emoji-only check
