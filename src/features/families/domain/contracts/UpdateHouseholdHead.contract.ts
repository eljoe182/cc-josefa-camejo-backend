import { HouseholdHead } from '@feat/families/infrastructure/entities/HouseholdHead.entity';

export interface UpdateHouseholdHeadContract {
  id: string;
  data: HouseholdHead;
}
