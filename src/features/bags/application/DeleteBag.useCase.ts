import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { IBagsRepository } from '../infrastructure/interfaces/IBagsRepository';

export default class DeleteBagUseCase implements IBaseUseCase {
  constructor(private repository: IBagsRepository) {}

  execute(id?: string): Promise<unknown> {
    return this.repository.destroy(id);
  }
}
