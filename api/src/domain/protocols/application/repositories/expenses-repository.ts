import { Expense } from '../../enterprise/entities/expense'

export interface ExpensesRepository {
  create(expense: Expense): Promise<Expense>
}
