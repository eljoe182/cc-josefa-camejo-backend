import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { IPaidInfoRepository } from '../infrastructure/interfaces/IPaidInfoRepository';

export default class CreatePaidInfoUseCase implements IBaseUseCase {
  constructor(private readonly repository: IPaidInfoRepository) {}

  async execute(params: unknown): Promise<unknown> {
    return this.repository.create(params);
  }
}
