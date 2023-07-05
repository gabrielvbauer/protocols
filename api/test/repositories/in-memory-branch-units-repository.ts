import { BranchUnitsRepository } from '@/domain/protocols/application/repositories/branch-units-repository'
import { BranchUnit } from '@/domain/protocols/enterprise/entities/branch-unit'

export class InMemoryBranchUnitsRepository implements BranchUnitsRepository {
  public items: BranchUnit[] = []

  async create(branchUnit: BranchUnit): Promise<BranchUnit> {
    this.items.push(branchUnit)

    return branchUnit
  }
}
