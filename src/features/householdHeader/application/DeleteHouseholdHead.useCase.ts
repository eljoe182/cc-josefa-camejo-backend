import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { IHouseholdHeadRepository } from '../infrastructure/interfaces/IHouseholdHeadRepository';

export default class DeleteHouseholdHeadUseCase implements IBaseUseCase {
  constructor(private readonly repository: IHouseholdHeadRepository) {}

  async execute(id: string): Promise<unknown> {
    return this.repository.destroy(id);
  }
}
