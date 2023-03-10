import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { IStreetLeaderRepository } from '../infrastructure/interfaces/IStreetLeaderRepository';

export default class FindStreetLeaderUseCase implements IBaseUseCase {
  constructor(private readonly repository: IStreetLeaderRepository) {}

  async execute(id: string): Promise<unknown> {
    return this.repository.findById(id);
  }
}
