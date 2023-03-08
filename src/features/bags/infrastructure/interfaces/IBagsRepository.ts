import { IBasePagination } from '@shared/domain/BasePagination';

export interface IBagsRepository {
  findAll(pagination?: IBasePagination): Promise<unknown>;
  create(params: unknown): Promise<unknown>;
  find(id: unknown): Promise<unknown>;
  update(id: unknown, data: unknown): Promise<unknown>;
  destroy(id: unknown): Promise<unknown>;
}
