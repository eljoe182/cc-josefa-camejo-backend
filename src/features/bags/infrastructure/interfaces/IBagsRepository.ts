import { IBasePagination } from '@shared/domain/BasePagination';

export interface IBagsRepository {
  getAll(pagination?: IBasePagination): Promise<unknown>;
  create(data: unknown): Promise<unknown>;
  findById(id: unknown): Promise<unknown>;
  update(id: unknown, data: unknown): Promise<unknown>;
  destroy(id: unknown): Promise<unknown>;
}
