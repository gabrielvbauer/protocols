import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

interface IssuerProps {
  name: string
  createdAt: Date
  updatedAt?: Date
}

export class Issuer extends Entity<IssuerProps> {
  get name(): string {
    return this.name
  }

  get createdAt(): Date {
    return this.createdAt
  }

  get updatedAt(): Date {
    return this.updatedAt
  }

  set name(name: string) {
    this.name = name
    this.touch()
  }

  touch() {
    this.props.updatedAt = new Date()
  }

  static create(
    props: Optional<IssuerProps, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const issuer = new Issuer(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return issuer
  }
}
