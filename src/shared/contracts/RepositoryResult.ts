export interface RepositoryResult<T = unknown> {
  message: string;
  data: T | null;
}
