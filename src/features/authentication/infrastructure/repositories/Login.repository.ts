import { DataSource } from 'typeorm';
import { ILoginRepository } from '../interfaces/ILoginRepository';
import { LoginRequest } from '@feat/authentication/domain/contracts/user.contract';
import { User } from '../entities/Users.entity';
import { RepositoryResult } from '@shared/contracts/RepositoryResult';

export default class LoginRepository implements ILoginRepository {
  constructor(private orm: DataSource) {}

  async signIn(user: LoginRequest): Promise<RepositoryResult> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(User);
    const result = await repository.findOne({
      where: {
        username: user.username,
      },
    });
    await orm.destroy();
    return {
      message: 'User found',
      data: result,
    };
  }

  async signUp(user: LoginRequest): Promise<RepositoryResult> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(User);
    const result = await repository.create(user);
    await repository.save(result);
    await orm.destroy();
    return {
      message: 'User created',
      data: result,
    };
  }
}
