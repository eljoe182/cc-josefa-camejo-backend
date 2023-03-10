import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { ISectorsRepository } from '../infrastructure/interfaces/ISectorRepository';

export default class CreateSectorUseCase implements IBaseUseCase {
  constructor(private repository: ISectorsRepository) {}

  execute(params?: unknown): Promise<unknown> {
    return this.repository.create(params);
  }
}
