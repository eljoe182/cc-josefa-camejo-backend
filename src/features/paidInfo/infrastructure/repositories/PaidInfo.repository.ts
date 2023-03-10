import { DataSource } from 'typeorm';
import { IPaidInfoRepository } from '../interfaces/IPaidInfoRepository';
import { PaidInfo } from '../entities/PaidInfo.entity';

export default class PaidInfoRepository implements IPaidInfoRepository {
  constructor(private orm: DataSource) {}

  async getAll(): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(PaidInfo);
    const [rows, rowsCount] = await repository.findAndCount();
    await orm.destroy();
    return {
      message: 'Find all Paid Information',
      data: {
        rows,
        rowsCount,
      },
    };
  }

  async create(paidInfo: PaidInfo): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(PaidInfo);
    const data = repository.create(paidInfo);
    const result = await repository.save(data);
    await orm.destroy();
    return {
      message: 'Paid Information created',
      data: result,
    };
  }

  async findById(id: string): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(PaidInfo);
    const result = await repository.findOneById(id);
    await orm.destroy();
    return {
      message: 'Paid Information found',
      data: result,
    };
  }

  async update(id: string, data: PaidInfo): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(PaidInfo);
    data.updatedAt = new Date();
    const result = await repository.update(id, data);
    await orm.destroy();
    return {
      message: 'Paid Information updated',
      data: result,
    };
  }

  async destroy(id: string): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(PaidInfo);
    const result = await repository.delete(id);
    await orm.destroy();
    return {
      message: 'Paid Information deleted',
      data: result,
    };
  }
}
