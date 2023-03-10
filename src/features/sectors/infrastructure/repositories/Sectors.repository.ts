import { DataSource } from 'typeorm';
import { ISectorsRepository } from '../interfaces/ISectorRepository';
import { Sector } from '../entities/Sector.entity';

export default class SectorsRepository implements ISectorsRepository {
  constructor(private orm: DataSource) {}

  async getAll(): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(Sector);
    const [rows, rowsCount] = await repository.findAndCount();
    await orm.destroy();
    return {
      message: 'Find all sectors',
      data: {
        rows,
        rowsCount,
      },
    };
  }

  async create(sector: Sector): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(Sector);
    const data = repository.create(sector);
    const result = await repository.save(data);
    await orm.destroy();
    return {
      message: 'Sector created',
      data: result,
    };
  }

  async findById(id: string): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(Sector);
    const result = await repository.findOneById(id);
    await orm.destroy();
    return {
      message: 'Sector found',
      data: result,
    };
  }

  async update(id: string, data: Sector): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(Sector);
    const result = await repository.update(id, data);
    await orm.destroy();
    return {
      message: 'Sector updated',
      data: result,
    };
  }

  async destroy(id: string): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(Sector);
    const result = await repository.delete(id);
    await orm.destroy();
    return {
      message: 'Sector deleted',
      data: result,
    };
  }
}
