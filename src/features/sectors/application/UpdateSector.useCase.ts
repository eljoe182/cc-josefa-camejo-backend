import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { ISectorsRepository } from '../infrastructure/interfaces/ISectorRepository';

export default class UpdateSectorUseCase implements IBaseUseCase {
  constructor(private repository: ISectorsRepository) {}

  execute(params: unknown): Promise<unknown> {
    const { id, data } = params as { id: string; data: unknown };
    return this.repository.update(id, data);
  }
}
