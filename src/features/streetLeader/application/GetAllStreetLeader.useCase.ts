import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { IStreetLeaderRepository } from '../infrastructure/interfaces/IStreetLeaderRepository';
import { IBasePagination } from '@shared/domain/BasePagination';

export default class GetAllStreetLeaderUseCase implements IBaseUseCase {
  constructor(private readonly repository: IStreetLeaderRepository) {}

  async execute(pagination?: IBasePagination): Promise<unknown> {
    return await this.repository.getAll(pagination);
  }
}
