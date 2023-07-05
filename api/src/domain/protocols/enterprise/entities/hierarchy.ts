import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

interface HierarchyProps {
  name: string
  createdAt: Date
  updatedAt?: Date
}

export class Hierarchy extends Entity<HierarchyProps> {
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

  static create(
    props: Optional<HierarchyProps, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const hierarchy = new Hierarchy(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return hierarchy
  }
}
