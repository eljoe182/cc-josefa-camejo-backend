import { HouseholdHead } from '@feat/householdHeader/infrastructure/entities/HouseholdHead.entity';

export interface UpdateHouseholdHeadContract {
  id: string;
  data: HouseholdHead;
}
