import { Protocol } from '../../enterprise/entities/protocol'

export interface ProtocolsRepository {
  create(protocol: Protocol): Promise<Protocol>
}
