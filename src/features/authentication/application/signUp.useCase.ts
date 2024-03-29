import { RepositoryResult } from '@shared/contracts/RepositoryResult';
import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { LoginRequest } from '../domain/contracts/user.contract';
import { ILoginRepository } from '../infrastructure/interfaces/ILoginRepository';
import { HashString } from '../domain/data-value/hash';

export default class SignUpUseCase implements IBaseUseCase {
  constructor(private repository: ILoginRepository) {}

  async execute(user: LoginRequest): Promise<RepositoryResult> {
    user.password = await HashString.from(user.password);
    const result = await this.repository.signUp(user);
    return result;
  }
}
