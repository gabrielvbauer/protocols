import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'
import { Location } from './value-objects/location'

interface BranchUnitProps {
  name: string
  erpId: number
  location: Location
  createdAt: Date
  updatedAt?: Date
}

export class BranchUnit extends Entity<BranchUnitProps> {
  get name(): string {
    return this.props.name
  }

  get erpId(): number {
    return this.props.erpId
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
    props: Optional<BranchUnitProps, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const branchunit = new BranchUnit(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )

    return branchunit
  }
}
