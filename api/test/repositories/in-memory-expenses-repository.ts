import { ExpensesRepository } from '@/domain/protocols/application/repositories/expenses-repository'
import { Expense } from '@/domain/protocols/enterprise/entities/expense'

export class InMemoryExpensesRepository implements ExpensesRepository {
  public items: Expense[] = []

  async create(expense: Expense): Promise<Expense> {
    this.items.push(expense)

    return expense
  }
}
