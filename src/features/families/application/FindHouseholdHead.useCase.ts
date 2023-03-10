import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { IHouseholdHeadRepository } from '../infrastructure/interfaces/IHouseholdHeadRepository';

export default class FindHouseholdHeadUseCase implements IBaseUseCase {
  constructor(private readonly repository: IHouseholdHeadRepository) {}

  async execute(id: string): Promise<unknown> {
    return this.repository.findById(id);
  }
}
