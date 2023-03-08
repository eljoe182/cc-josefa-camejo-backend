import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { IBagsRepository } from '../infrastructure/interfaces/IBagsRepository';

export default class FindBagUseCase implements IBaseUseCase {
  constructor(private repository: IBagsRepository) {}

  execute(id: string): Promise<unknown> {
    return this.repository.find(id);
  }
}
