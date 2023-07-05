import { PaymentMethod } from '../../enterprise/entities/payment-method'

export interface PaymentMethodsRepository {
  create(paymentmethod: PaymentMethod): Promise<PaymentMethod>
}
