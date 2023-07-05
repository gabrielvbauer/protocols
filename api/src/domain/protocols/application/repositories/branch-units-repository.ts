import { BranchUnit } from '../../enterprise/entities/branch-unit'

export interface BranchUnitsRepository {
  create(branchUnit: BranchUnit): Promise<BranchUnit>
}
