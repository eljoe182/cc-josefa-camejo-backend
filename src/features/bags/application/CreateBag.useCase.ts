import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { IBagsRepository } from '../infrastructure/interfaces/IBagsRepository';

export default class CreateBagUseCase implements IBaseUseCase {
  constructor(private repository: IBagsRepository) {}

  execute(params?: unknown): Promise<unknown> {
    return this.repository.create(params);
  }
}
