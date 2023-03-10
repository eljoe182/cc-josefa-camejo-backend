import { IBasePagination } from '@shared/domain/BasePagination';

export interface IStreetLeaderRepository {
  getAll(pagination?: IBasePagination): Promise<unknown>;
  create(params: unknown): Promise<unknown>;
  findById(id: string): Promise<unknown>;
  update(id: string, data: unknown): Promise<unknown>;
  destroy(id: string): Promise<unknown>;
}
