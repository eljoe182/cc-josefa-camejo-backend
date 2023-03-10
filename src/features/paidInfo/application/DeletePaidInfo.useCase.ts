import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { IPaidInfoRepository } from '../infrastructure/interfaces/IPaidInfoRepository';

export default class DeletePaidInfoUseCase implements IBaseUseCase {
  constructor(private readonly repository: IPaidInfoRepository) {}

  async execute(id: string): Promise<unknown> {
    return this.repository.destroy(id);
  }
}
