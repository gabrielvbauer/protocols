import { Issuer } from '../../enterprise/entities/issuer'

export interface IssuersRepository {
  create(issuer: Issuer): Promise<Issuer>
}
