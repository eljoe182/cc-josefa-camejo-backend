import { RepositoryResult } from '@shared/contracts/RepositoryResult';
import { LoginRequest } from '../domain/contracts/user.contract';
import { ILoginRepository } from '../infrastructure/interfaces/ILoginRepository';
import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { HashString } from '../domain/data-value/hash';

export default class SignInUseCase implements IBaseUseCase {
  constructor(private repository: ILoginRepository, private tokeUseCase: IBaseUseCase) {}

  async execute(user: LoginRequest): Promise<RepositoryResult> {
    const { data } = await this.repository.signIn(user);

    if (!data) {
      return {
        message: 'Invalid credentials',
        data: null,
      };
    }

    const isPasswordValid = HashString.equals(user.password, data.password);

    if (!isPasswordValid) {
      return {
        message: 'Invalid credentials',
        data: null,
      };
    }

    const payload = {
      id: data.id.toString(),
      email: data.email,
      username: data.username,
      name: data.name,
      active: data.active,
    };

    const token = await this.tokeUseCase.execute(payload);

    return {
      message: 'User logged in',
      data: { token },
    };
  }
}
