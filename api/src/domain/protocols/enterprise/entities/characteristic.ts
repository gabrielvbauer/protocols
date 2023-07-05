import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

interface CharacteristicProps {
  type: string
  isInvoice: boolean
  createdAt: Date
  updatedAt?: Date
}

export class Characteristic extends Entity<CharacteristicProps> {
  get type(): string {
    return this.props.type
  }

  get isInvoice(): boolean {
    return this.props.isInvoice
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updatedAt(): Date | undefined {
    return this.props.updatedAt
  }

  set type(type: string) {
    this.props.type = type
    this.touch()
  }

  set isInvoice(isInvoice: boolean) {
    this.props.isInvoice = isInvoice
    this.touch()
  }

  touch() {
    this.props.updatedAt = new Date()
  }

  static create(
    props: Optional<CharacteristicProps, 'createdAt' | 'isInvoice'>,
    id?: UniqueEntityId,
  ) {
    const characteristic = new Characteristic(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        isInvoice: props.isInvoice ?? false,
      },
      id,
    )

    return characteristic
  }
}
