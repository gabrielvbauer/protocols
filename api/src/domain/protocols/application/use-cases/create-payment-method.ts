import { PaymentMethod } from '../../enterprise/entities/payment-method'
import { PaymentMethodsRepository } from '../repositories/payment-methods-repository'

interface CreatePaymentMethodUseCaseRequest {
  type: string
}

interface CreatePaymentMethodUseCaseResponse {
  paymentMethod: PaymentMethod
}

export class CreatePaymentMethodUseCase {
  constructor(private PaymentMethodsRepository: PaymentMethodsRepository) {}

  async execute(
    props: CreatePaymentMethodUseCaseRequest,
  ): Promise<CreatePaymentMethodUseCaseResponse> {
    const newPaymentMethod = PaymentMethod.create({
      type: props.type,
    })

    const paymentMethod = await this.PaymentMethodsRepository.create(
      newPaymentMethod,
    )

    return {
      paymentMethod,
    }
  }
}
