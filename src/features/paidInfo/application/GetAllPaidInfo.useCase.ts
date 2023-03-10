import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { IPaidInfoRepository } from '../infrastructure/interfaces/IPaidInfoRepository';
import { IBasePagination } from '@shared/domain/BasePagination';

export default class GetAllPaidInfoUseCase implements IBaseUseCase {
  constructor(private readonly repository: IPaidInfoRepository) {}

  async execute(pagination?: IBasePagination): Promise<unknown> {
    return await this.repository.getAll(pagination);
  }
}
