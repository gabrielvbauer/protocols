import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Protocol } from '../../enterprise/entities/protocol'
import { ProtocolsRepository } from '../repositories/protocols-repository'

interface CreateProtocolUseCaseRequest {
  issuerId: UniqueEntityId
  expense: string
  value: number
  paymentMethodId: UniqueEntityId
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
      issuerId: props.issuerId,
      expense: props.expense,
      value: props.value,
      paymentMethodId: props.paymentMethodId,
      dueDate: props.dueDate,
      issuedDate: props.issuedDate,
    })

    const protocol = await this.protocolsRepository.create(newProtocol)

    return {
      protocol,
    }
  }
}
