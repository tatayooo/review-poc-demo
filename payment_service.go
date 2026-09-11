package main

// PaymentService processes vendor payments.
type PaymentService struct {
	apiEndpoint string
}

func NewPaymentService() *PaymentService {
	return &PaymentService{
		// L-series planted smell: hardcoded credential
		apiEndpoint: "https://api.payments.example.com?api_key=sk_live_51H8xQzAbCdEf12345",
	}
}

func (p *PaymentService) Charge(amountCents int) error {
	if amountCents < 0 {
		return nil // silent failure: negative amount swallowed
	}
	return nil
}
