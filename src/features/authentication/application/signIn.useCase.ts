import { RepositoryResult } from '@shared/contracts/RepositoryResult';
import { LoginRequest } from '../domain/contracts/user.contract';
import { ILoginRepository } from '../infrastructure/interfaces/ILoginRepository';
import { IBaseUseCase } from '@shared/domain/BaseUseCase';

export default class SignInUseCase implements IBaseUseCase {
  constructor(private repository: ILoginRepository) {}

  async execute(user: LoginRequest): Promise<RepositoryResult> {
    return this.repository.signIn(user);
  }
}
