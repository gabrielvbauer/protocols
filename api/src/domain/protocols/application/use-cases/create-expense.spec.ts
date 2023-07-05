import { InMemoryExpensesRepository } from 'test/repositories/in-memory-expenses-repository'
import { CreateExpenseUseCase } from './create-expense'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

let inMemoryExpenseRepository: InMemoryExpensesRepository
let sut: CreateExpenseUseCase

describe('Create Expense use case', () => {
  beforeEach(() => {
    inMemoryExpenseRepository = new InMemoryExpensesRepository()
    sut = new CreateExpenseUseCase(inMemoryExpenseRepository)
  })

  it('should be able to create a new expense', async () => {
    const { expense } = await sut.execute({
      type: 'expense-1',
      areaId: new UniqueEntityId('area-1'),
    })

    expect(expense.id).toBeInstanceOf(UniqueEntityId)
    expect(inMemoryExpenseRepository.items).toHaveLength(1)
    expect(inMemoryExpenseRepository.items[0]).toEqual(
      expect.objectContaining({
        id: expense.id,
      }),
    )
  })
})
