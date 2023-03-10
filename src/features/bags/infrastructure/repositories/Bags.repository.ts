import { DataSource } from 'typeorm';
import { IBagsRepository } from '../interfaces/IBagsRepository';
import { Bag } from '../model/Bags.model';

export default class BagsRepository implements IBagsRepository {
  constructor(private orm: DataSource) {}

  async findAll(): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(Bag);
    const [rows, rowsCount] = await repository.findAndCount();
    await orm.destroy();
    return {
      message: 'Find all bags',
      data: {
        rows,
        rowsCount,
      },
    };
  }

  async create(bags: Bag): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(Bag);
    const data = repository.create(bags);
    const result = await repository.save(data);
    await orm.destroy();
    return {
      message: 'Bag created',
      data: result,
    };
  }

  async find(id: string): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(Bag);
    const result = await repository.findOneById(id);
    await orm.destroy();
    return {
      message: 'Bag found',
      data: result,
    };
  }

  async update(id: string, bags: Bag): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(Bag);
    bags.updatedAt = new Date();
    const data = await repository.update(id, bags);
    await orm.destroy();
    return {
      message: 'Bag updated',
      data,
    };
  }

  async destroy(id: string): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(Bag);
    const data = await repository.delete(id);
    await orm.destroy();
    return {
      message: 'Bag deleted',
      data,
    };
  }
}
