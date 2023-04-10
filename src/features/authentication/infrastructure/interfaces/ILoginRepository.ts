import { LoginRequest } from '@feat/authentication/domain/contracts/user.contract';
import { RepositoryResult } from '@shared/contracts/RepositoryResult';
import { User } from '../entities/Users.entity';

export interface ILoginRepository {
  signIn: (user: LoginRequest) => Promise<RepositoryResult<User>>;
  signUp: (user: LoginRequest) => Promise<RepositoryResult<User>>;
}
