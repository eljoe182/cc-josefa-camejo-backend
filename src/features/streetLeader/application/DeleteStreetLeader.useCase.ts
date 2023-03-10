import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { IStreetLeaderRepository } from '../infrastructure/interfaces/IStreetLeaderRepository';

export default class DeleteStreetLeaderUseCase implements IBaseUseCase {
  constructor(private readonly repository: IStreetLeaderRepository) {}

  async execute(id: string): Promise<unknown> {
    return this.repository.destroy(id);
  }
}
