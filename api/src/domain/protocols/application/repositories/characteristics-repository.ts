import { Characteristic } from '../../enterprise/entities/characteristic'

export interface CharacteristicsRepository {
  create(characteristic: Characteristic): Promise<Characteristic>
}
