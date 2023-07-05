import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Expense } from '../../enterprise/entities/expense'
import { ExpensesRepository } from '../repositories/expenses-repository'

interface CreateExpenseUseCaseRequest {
  type: string
  areaId: UniqueEntityId
}

interface CreateExpenseUseCaseResponse {
  expense: Expense
}

export class CreateExpenseUseCase {
  constructor(private ExpensesRepository: ExpensesRepository) {}

  async execute(
    props: CreateExpenseUseCaseRequest,
  ): Promise<CreateExpenseUseCaseResponse> {
    const newExpense = Expense.create({
      type: props.type,
      areaId: props.areaId,
    })

    const expense = await this.ExpensesRepository.create(newExpense)

    return {
      expense,
    }
  }
}
