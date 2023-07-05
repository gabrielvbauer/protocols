import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

interface PaymentMethodProps {
  type: string
  createdAt?: Date
  updatedAt?: Date
}

export class PaymentMethod extends Entity<PaymentMethodProps> {
  get type(): string {
    return this.type
  }

  get createdAt(): Date {
    return this.createdAt
  }

  get updatedAt(): Date {
    return this.updatedAt
  }

  set type(value: string) {
    this.props.type = value
    this.touch()
  }

  touch() {
    this.props.updatedAt = new Date()
  }

  static create(props: PaymentMethodProps, id?: UniqueEntityId) {
    const paymentMethod = new PaymentMethod(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return paymentMethod
  }
}
