import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { IHouseholdHeadRepository } from '../infrastructure/interfaces/IHouseholdHeadRepository';
import { UpdateHouseholdHeadContract } from '../domain/contracts/UpdateHouseholdHead.contract';

export default class UpdateHouseholdHeadUseCase implements IBaseUseCase {
  constructor(private readonly repository: IHouseholdHeadRepository) {}

  async execute(params: UpdateHouseholdHeadContract): Promise<unknown> {
    const { id, data } = params;
    return this.repository.update(id, data);
  }
}
