import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { IBagsRepository } from '../infrastructure/interfaces/IBagsRepository';
import { UpdateBagContract } from '../domain/contracts/UpdateBag.contract';

export default class UpdateBagUseCase implements IBaseUseCase {
  constructor(private repository: IBagsRepository) {}

  execute(params?: UpdateBagContract): Promise<unknown> {
    const id = params?.id;
    const data = params?.data;
    return this.repository.update(id, data);
  }
}
