import { InMemoryPaymentMethodsRepository } from 'test/repositories/in-memory-payment-methods-repository'
import { CreatePaymentMethodUseCase } from './create-payment-method'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

let inMemoryPaymentMethodRepository: InMemoryPaymentMethodsRepository
let sut: CreatePaymentMethodUseCase

describe('Create PaymentMethod use case', () => {
  beforeEach(() => {
    inMemoryPaymentMethodRepository = new InMemoryPaymentMethodsRepository()
    sut = new CreatePaymentMethodUseCase(inMemoryPaymentMethodRepository)
  })

  it('should be able to create a new paymentmethod', async () => {
    const { paymentMethod } = await sut.execute({
      type: 'payment-1',
    })

    expect(paymentMethod.id).toBeInstanceOf(UniqueEntityId)
    expect(inMemoryPaymentMethodRepository.items).toHaveLength(1)
    expect(inMemoryPaymentMethodRepository.items[0]).toEqual(
      expect.objectContaining({
        id: paymentMethod.id,
      }),
    )
  })
})
