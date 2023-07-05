import { InMemoryBranchUnitsRepository } from 'test/repositories/in-memory-branch-units-repository'
import { CreateBranchUnitUseCase } from './create-branch-unit'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Location } from '../../enterprise/entities/value-objects/location'

let inMemoryBranchUnitRepository: InMemoryBranchUnitsRepository
let sut: CreateBranchUnitUseCase

describe('Create BranchUnit use case', () => {
  beforeEach(() => {
    inMemoryBranchUnitRepository = new InMemoryBranchUnitsRepository()
    sut = new CreateBranchUnitUseCase(inMemoryBranchUnitRepository)
  })

  it('should be able to create a new branchunit', async () => {
    const { branchUnit } = await sut.execute({
      name: 'unit-1',
      erpId: 10,
      location: Location.create(-10, 10),
    })

    expect(branchUnit.id).toBeInstanceOf(UniqueEntityId)
    expect(inMemoryBranchUnitRepository.items).toHaveLength(1)
    expect(inMemoryBranchUnitRepository.items[0]).toEqual(
      expect.objectContaining({
        id: branchUnit.id,
      }),
    )
  })
})
