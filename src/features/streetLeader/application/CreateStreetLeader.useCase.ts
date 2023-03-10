import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { IStreetLeaderRepository } from '../infrastructure/interfaces/IStreetLeaderRepository';

export default class CreateStreetLeaderUseCase implements IBaseUseCase {
  constructor(private readonly repository: IStreetLeaderRepository) {}

  async execute(params: unknown): Promise<unknown> {
    return this.repository.create(params);
  }
}
