import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { IHouseholdHeadRepository } from '../infrastructure/interfaces/IHouseholdHeadRepository';

export default class CreateHouseholdHeadUseCase implements IBaseUseCase {
  constructor(private readonly repository: IHouseholdHeadRepository) {}

  async execute(params: unknown): Promise<unknown> {
    return this.repository.create(params);
  }
}
