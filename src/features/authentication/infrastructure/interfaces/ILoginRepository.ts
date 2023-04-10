import { LoginRequest } from '@feat/authentication/domain/contracts/user.contract';
import { RepositoryResult } from '@shared/contracts/RepositoryResult';

export interface ILoginRepository {
  signIn: (user: LoginRequest) => Promise<RepositoryResult>;
  signUp: (user: LoginRequest) => Promise<RepositoryResult>;
}
