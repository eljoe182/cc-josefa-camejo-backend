import { Bag } from '@feat/bags/infrastructure/model/Bags.model';

export interface UpdateBagContract {
  id: string;
  data: Bag;
}
