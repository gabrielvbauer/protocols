import { Issuer } from '../../enterprise/entities/issuer'
import { IssuersRepository } from '../repositories/issuers-repository'

interface CreateIssuerUseCaseRequest {
  name: string
}

interface CreateIssuerUseCaseResponse {
  issuer: Issuer
}

export class CreateIssuerUseCase {
  constructor(private IssuersRepository: IssuersRepository) {}

  async execute(
    props: CreateIssuerUseCaseRequest,
  ): Promise<CreateIssuerUseCaseResponse> {
    const newIssuer = Issuer.create({
      name: props.name,
    })

    const issuer = await this.IssuersRepository.create(newIssuer)

    return {
      issuer,
    }
  }
}
