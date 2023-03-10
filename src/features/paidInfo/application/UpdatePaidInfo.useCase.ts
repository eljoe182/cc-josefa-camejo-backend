import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { IPaidInfoRepository } from '../infrastructure/interfaces/IPaidInfoRepository';
import { UpdatePaidInfoContract } from '../domain/contracts/UpdatePaidInfo.contract';

export default class UpdatePaidInfoUseCase implements IBaseUseCase {
  constructor(private readonly repository: IPaidInfoRepository) {}

  async execute(params: UpdatePaidInfoContract): Promise<unknown> {
    const { id, data } = params;
    return this.repository.update(id, data);
  }
}
