import { IssuersRepository } from '@/domain/protocols/application/repositories/issuers-repository'
import { Issuer } from '@/domain/protocols/enterprise/entities/issuer'

export class InMemoryIssuersRepository implements IssuersRepository {
  public items: Issuer[] = []

  async create(issuer: Issuer): Promise<Issuer> {
    this.items.push(issuer)

    return issuer
  }
}
