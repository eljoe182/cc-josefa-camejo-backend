import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { ISectorsRepository } from '../infrastructure/interfaces/ISectorRepository';
import { IBasePagination } from '@shared/domain/BasePagination';

export default class GetAllSectorsUseCase implements IBaseUseCase {
  constructor(private repository: ISectorsRepository) {}

  execute(pagination?: IBasePagination): Promise<unknown> {
    return this.repository.getAll(pagination);
  }
}
