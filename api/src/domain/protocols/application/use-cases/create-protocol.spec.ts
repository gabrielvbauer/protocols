import { InMemoryProtocolsRepository } from 'test/repositories/in-memory-protocols-repository'
import { CreateProtocolUseCase } from './create-protocol'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

let inMemoryProtocolRepository: InMemoryProtocolsRepository
let sut: CreateProtocolUseCase

describe('Create Protocol use case', () => {
  beforeEach(() => {
    inMemoryProtocolRepository = new InMemoryProtocolsRepository()
    sut = new CreateProtocolUseCase(inMemoryProtocolRepository)
  })

  it('should be able to create a new protocol', async () => {
    const { protocol } = await sut.execute({
      issuerId: new UniqueEntityId('issuer-1'),
      expense: 'expense-1',
      value: 123,
      paymentMethodId: new UniqueEntityId('payment-1'),
      dueDate: new Date(2023, 0, 0),
      issuedDate: new Date(2023, 0, 0),
    })

    expect(protocol.id).toBeInstanceOf(UniqueEntityId)
    expect(inMemoryProtocolRepository.items).toHaveLength(1)
    expect(inMemoryProtocolRepository.items[0]).toEqual(
      expect.objectContaining({
        id: protocol.id,
        status: 'Rascunho',
      }),
    )
  })
})
