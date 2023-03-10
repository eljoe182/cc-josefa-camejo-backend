import { DataSource } from 'typeorm';
import { IHouseholdHeadRepository } from '../interfaces/IHouseholdHeadRepository';
import { HouseholdHead } from '../entities/HouseholdHead.entity';

export default class HouseholdHeadRepository implements IHouseholdHeadRepository {
  constructor(private orm: DataSource) {}

  async getAll(): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(HouseholdHead);
    const [rows, rowsCount] = await repository.findAndCount();
    await orm.destroy();
    return {
      message: 'Find all household heads',
      data: {
        rows,
        rowsCount,
      },
    };
  }

  async create(householdHead: HouseholdHead): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(HouseholdHead);
    const data = repository.create(householdHead);
    const result = await repository.save(data);
    await orm.destroy();
    return {
      message: 'Household head created',
      data: result,
    };
  }

  async findById(id: string): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(HouseholdHead);
    const result = await repository.findOneById(id);
    await orm.destroy();
    return {
      message: 'Household head found',
      data: result,
    };
  }

  async update(id: string, data: HouseholdHead): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(HouseholdHead);
    data.updatedAt = new Date();
    const result = await repository.update(id, data);
    await orm.destroy();
    return {
      message: 'Household head updated',
      data: result,
    };
  }

  async destroy(id: string): Promise<unknown> {
    const orm = await this.orm.initialize();
    const repository = orm.manager.getMongoRepository(HouseholdHead);
    const result = await repository.delete(id);
    await orm.destroy();
    return {
      message: 'Household head deleted',
      data: result,
    };
  }
}
