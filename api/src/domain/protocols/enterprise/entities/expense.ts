import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

interface ExpenseProps {
  type: string
  areaId: UniqueEntityId
  createdAt: Date
  updatedAt?: Date
}

export class Expense extends Entity<ExpenseProps> {
  get type(): string {
    return this.props.type
  }

  get areaId(): UniqueEntityId {
    return this.props.areaId
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updatedAt(): Date | undefined {
    return this.props.updatedAt
  }

  set type(value: string) {
    this.props.type = value
    this.touch()
  }

  touch() {
    this.props.updatedAt = new Date()
  }

  static create(
    props: Optional<ExpenseProps, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const expense = new Expense(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return expense
  }
}
