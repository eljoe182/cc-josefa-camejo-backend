import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { ISectorsRepository } from '../infrastructure/interfaces/ISectorRepository';

export default class FindSectorUseCase implements IBaseUseCase {
  constructor(private repository: ISectorsRepository) {}

  execute(id: string): Promise<unknown> {
    return this.repository.findById(id);
  }
}
