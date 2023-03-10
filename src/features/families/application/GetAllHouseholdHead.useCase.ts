import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { IHouseholdHeadRepository } from '../infrastructure/interfaces/IHouseholdHeadRepository';
import { IBasePagination } from '@shared/domain/BasePagination';

export default class GetAllHouseholdHeadUseCase implements IBaseUseCase {
  constructor(private readonly repository: IHouseholdHeadRepository) {}

  async execute(pagination?: IBasePagination): Promise<unknown> {
    return await this.repository.getAll(pagination);
  }
}
