import { Bag } from '@feat/bags/infrastructure/entities/Bags.entity';

export interface UpdateBagContract {
  id: string;
  data: Bag;
}
