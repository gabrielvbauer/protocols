import { ProtocolsRepository } from '@/domain/protocols/application/repositories/protocols-repository'
import { Protocol } from '@/domain/protocols/enterprise/entities/protocol'

export class InMemoryProtocolsRepository implements ProtocolsRepository {
  public items: Protocol[] = []

  async create(protocol: Protocol): Promise<Protocol> {
    this.items.push(protocol)

    return protocol
  }
}
