import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { ISectorsRepository } from '../infrastructure/interfaces/ISectorRepository';

export default class DeleteSectorUseCase implements IBaseUseCase {
  constructor(private repository: ISectorsRepository) {}

  async execute(id: string) {
    return await this.repository.destroy(id);
  }
}
