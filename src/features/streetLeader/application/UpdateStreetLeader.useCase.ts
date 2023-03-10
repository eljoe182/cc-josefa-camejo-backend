import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { IStreetLeaderRepository } from '../infrastructure/interfaces/IStreetLeaderRepository';
import { UpdateStreetLeaderContract } from '../domain/contracts/UpdateStreetLeader.contract';

export default class UpdateStreetLeaderUseCase implements IBaseUseCase {
  constructor(private readonly repository: IStreetLeaderRepository) {}

  async execute(params: UpdateStreetLeaderContract): Promise<unknown> {
    const { id, data } = params;
    return this.repository.update(id, data);
  }
}
