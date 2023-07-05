import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'
import { ProtocolStatus } from '../../application/types/protocol-status'

export interface ProtocolProps {
  number: number
  status: ProtocolStatus
  issuerId: UniqueEntityId
  expense: string
  value: number
  paymentMethodId: UniqueEntityId
  dueDate: Date
  issuedDate: Date
  createdAt: Date
  updatedAt?: Date
}

export class Protocol extends Entity<ProtocolProps> {
  get number(): number {
    return this.props.number
  }

  get status(): ProtocolStatus {
    return this.props.status
  }

  get issuerId(): UniqueEntityId {
    return this.props.issuerId
  }

  get expense(): string {
    return this.props.expense
  }

  get value(): number {
    return this.props.value
  }

  get paymentMethodId(): UniqueEntityId {
    return this.props.paymentMethodId
  }

  get dueDate(): Date {
    return this.props.dueDate
  }

  get issuedDate(): Date {
    return this.props.issuedDate
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updatedAt(): Date | undefined {
    return this.props.updatedAt
  }

  private touch(): void {
    this.props.updatedAt = new Date()
  }

  set status(status: ProtocolStatus) {
    this.props.status = status
    this.touch()
  }

  set issuerId(issuerId: UniqueEntityId) {
    this.props.issuerId = issuerId
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

  set paymentMethodId(paymentMethodId: UniqueEntityId) {
    this.props.paymentMethodId = paymentMethodId
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
    props: Optional<ProtocolProps, 'createdAt' | 'number' | 'status'>,
    id?: UniqueEntityId,
  ) {
    const protocol = new Protocol(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        number: props.number ?? 0,
        status: props.status ?? 'Rascunho',
      },
      id,
    )

    return protocol
  }
}
