import { DataSource } from 'typeorm';
import { IStreetLeaderRepository } from '../interfaces/IStreetLeaderRepository';
import { StreetLeader } from '../entities/StreetLeader.entity';

export default class StreetLeadersRepository implements IStreetLeaderRepository {
  constructor(private orm: DataSource) {}

  async getAll(): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(StreetLeader);
    const [rows, rowsCount] = await repository.findAndCount();
    await orm.destroy();
    return {
      message: 'Find all Street Leaders',
      data: {
        rows,
        rowsCount,
      },
    };
  }

  async create(streetLeader: StreetLeader): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(StreetLeader);
    const data = repository.create(streetLeader);
    const result = await repository.save(data);
    await orm.destroy();
    return {
      message: 'Street Leader created',
      data: result,
    };
  }

  async findById(id: string): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(StreetLeader);
    const result = await repository.findOneById(id);
    await orm.destroy();
    return {
      message: 'Street Leader found',
      data: result,
    };
  }

  async update(id: string, data: StreetLeader): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(StreetLeader);
    data.updatedAt = new Date();
    const result = await repository.update(id, data);
    await orm.destroy();
    return {
      message: 'Street Leader updated',
      data: result,
    };
  }

  async destroy(id: string): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(StreetLeader);
    const result = await repository.delete(id);
    await orm.destroy();
    return {
      message: 'Street Leader deleted',
      data: result,
    };
  }
}
