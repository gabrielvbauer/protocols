import { Characteristic } from '../../enterprise/entities/characteristic'
import { CharacteristicsRepository } from '../repositories/characteristics-repository'

interface CreateCharacteristicUseCaseRequest {
  type: string
  isInvoice?: boolean
}

interface CreateCharacteristicUseCaseResponse {
  characteristic: Characteristic
}

export class CreateCharacteristicUseCase {
  constructor(private CharacteristicsRepository: CharacteristicsRepository) {}

  async execute(
    props: CreateCharacteristicUseCaseRequest,
  ): Promise<CreateCharacteristicUseCaseResponse> {
    const newCharacteristic = Characteristic.create({
      type: props.type,
      isInvoice: props.isInvoice,
    })

    const characteristic = await this.CharacteristicsRepository.create(
      newCharacteristic,
    )

    return {
      characteristic,
    }
  }
}
