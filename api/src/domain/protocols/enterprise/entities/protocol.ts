import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

export interface ProtocolProps {
  number: number
  issuer: string
  expense: string
  value: number
  dueDate: Date
  issuedDate: Date
  createdAt: Date
  updatedAt?: Date
}

export class Protocol extends Entity<ProtocolProps> {
  get number(): number {
    return this.number
  }

  get issuer(): string {
    return this.issuer
  }

  get expense(): string {
    return this.expense
  }

  get value(): number {
    return this.value
  }

  get dueDate(): Date {
    return this.dueDate
  }

  get issuedDate(): Date {
    return this.issuedDate
  }

  get createdAt(): Date {
    return this.createdAt
  }

  get updatedAt(): Date {
    return this.updatedAt
  }

  private touch(): void {
    this.props.updatedAt = new Date()
  }

  set issuer(issuer: string) {
    this.props.issuer = issuer
    this.touch()
  }

  set expense(expense: string) {
    this.props.expense = expense
    this.touch()
  }

  set value(value: number) {
    this.props.value = value
    this.touch()
  }

  set dueDate(dueDate: Date) {
    this.props.dueDate = dueDate
    this.touch()
  }

  set issuedDate(issuedDate: Date) {
    this.props.issuedDate = issuedDate
    this.touch()
  }

  static create(
    props: Optional<ProtocolProps, 'createdAt' | 'number'>,
    id?: UniqueEntityId,
  ) {
    const protocol = new Protocol(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        number: props.number ?? 0,
      },
      id,
    )

    return protocol
  }
}
