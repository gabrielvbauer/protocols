import { InMemoryCharacteristicsRepository } from 'test/repositories/in-memory-characteristics-repository'
import { CreateCharacteristicUseCase } from './create-characteristic'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

let inMemoryCharacteristicRepository: InMemoryCharacteristicsRepository
let sut: CreateCharacteristicUseCase

describe('Create Characteristic use case', () => {
  beforeEach(() => {
    inMemoryCharacteristicRepository = new InMemoryCharacteristicsRepository()
    sut = new CreateCharacteristicUseCase(inMemoryCharacteristicRepository)
  })

  it('should be able to create a new characteristic', async () => {
    const { characteristic } = await sut.execute({
      type: 'characteristic-1',
    })

    expect(characteristic.id).toBeInstanceOf(UniqueEntityId)
    expect(inMemoryCharacteristicRepository.items).toHaveLength(1)
    expect(inMemoryCharacteristicRepository.items[0]).toEqual(
      expect.objectContaining({
        id: characteristic.id,
      }),
    )
  })
})
