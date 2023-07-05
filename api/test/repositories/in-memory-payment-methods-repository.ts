import { PaymentMethodsRepository } from '@/domain/protocols/application/repositories/payment-methods-repository'
import { PaymentMethod } from '@/domain/protocols/enterprise/entities/payment-method'

export class InMemoryPaymentMethodsRepository
  implements PaymentMethodsRepository
{
  public items: PaymentMethod[] = []

  async create(paymentMethod: PaymentMethod): Promise<PaymentMethod> {
    this.items.push(paymentMethod)

    return paymentMethod
  }
}
