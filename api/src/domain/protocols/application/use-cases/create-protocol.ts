import { Protocol } from '../../enterprise/entities/protocol'
import { ProtocolsRepository } from '../repositories/protocols-repository'

interface CreateProtocolUseCaseRequest {
  issuer: string
  expense: string
  value: number
  dueDate: Date
  issuedDate: Date
}

interface CreateProtocolUseCaseResponse {
  protocol: Protocol
}

export class CreateProtocolUseCase {
  constructor(private protocolsRepository: ProtocolsRepository) {}

  async execute(
    props: CreateProtocolUseCaseRequest,
  ): Promise<CreateProtocolUseCaseResponse> {
    const newProtocol = Protocol.create({
      issuer: props.issuer,
      expense: props.expense,
      value: props.value,
      dueDate: props.dueDate,
      issuedDate: props.issuedDate,
    })

    const protocol = await this.protocolsRepository.create(newProtocol)

    return {
      protocol
    }
  }
}
