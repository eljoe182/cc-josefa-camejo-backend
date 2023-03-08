import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { IBagsRepository } from '../infrastructure/interfaces/IBagsRepository';
import { IBasePagination } from '@shared/domain/BasePagination';

export default class GetAllBagsUseCase implements IBaseUseCase {
  constructor(private repository: IBagsRepository) {}

  execute(params?: IBasePagination): Promise<unknown> {
    return this.repository.findAll(params);
  }
}
