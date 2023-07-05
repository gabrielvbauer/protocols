import { BranchUnit } from '../../enterprise/entities/branch-unit'
import { Location } from '../../enterprise/entities/value-objects/location'
import { BranchUnitsRepository } from '../repositories/branch-units-repository'

interface CreateBranchUnitUseCaseRequest {
  name: string
  erpId: number
  location: Location
}

interface CreateBranchUnitUseCaseResponse {
  branchUnit: BranchUnit
}

export class CreateBranchUnitUseCase {
  constructor(private BranchUnitsRepository: BranchUnitsRepository) {}

  async execute(
    props: CreateBranchUnitUseCaseRequest,
  ): Promise<CreateBranchUnitUseCaseResponse> {
    const newBranchUnit = BranchUnit.create({
      name: props.name,
      erpId: props.erpId,
      location: props.location,
    })

    const branchUnit = await this.BranchUnitsRepository.create(newBranchUnit)

    return {
      branchUnit,
    }
  }
}
