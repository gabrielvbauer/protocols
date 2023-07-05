import { InMemoryIssuersRepository } from 'test/repositories/in-memory-issuers-repository'
import { CreateIssuerUseCase } from './create-issuer'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

let inMemoryIssuerRepository: InMemoryIssuersRepository
let sut: CreateIssuerUseCase

describe('Create Issuer use case', () => {
  beforeEach(() => {
    inMemoryIssuerRepository = new InMemoryIssuersRepository()
    sut = new CreateIssuerUseCase(inMemoryIssuerRepository)
  })

  it('should be able to create a new issuer', async () => {
    const { issuer } = await sut.execute({
      name: 'issuer-1',
    })

    expect(issuer.id).toBeInstanceOf(UniqueEntityId)
    expect(inMemoryIssuerRepository.items).toHaveLength(1)
    expect(inMemoryIssuerRepository.items[0]).toEqual(
      expect.objectContaining({
        id: issuer.id,
      }),
    )
  })
})
