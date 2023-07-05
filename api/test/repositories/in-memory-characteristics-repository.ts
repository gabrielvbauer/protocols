import { CharacteristicsRepository } from '@/domain/protocols/application/repositories/characteristics-repository'
import { Characteristic } from '@/domain/protocols/enterprise/entities/characteristic'

export class InMemoryCharacteristicsRepository
  implements CharacteristicsRepository
{
  public items: Characteristic[] = []

  async create(characteristic: Characteristic): Promise<Characteristic> {
    this.items.push(characteristic)

    return characteristic
  }
}
