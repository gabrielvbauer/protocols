import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

interface AreaProps {
  name: string
  createdAt: Date
  updatedAt?: Date
}

export class Area extends Entity<AreaProps> {
  get name(): string {
    return this.props.name
  }

  get createdAt(): Date {
    return this.props.createdAt
  }

  get updatedAt(): Date | undefined {
    return this.props.updatedAt
  }

  set name(name: string) {
    this.props.name = name
    this.touch()
  }

  touch() {
    this.props.updatedAt = new Date()
  }

  static create(props: Optional<AreaProps, 'createdAt'>, id?: UniqueEntityId) {
    const area = new Area(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return area
  }
}
