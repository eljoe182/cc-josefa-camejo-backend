import { PaidInfo } from '@feat/paidInfo/infrastructure/entities/PaidInfo.entity';

export interface UpdatePaidInfoContract {
  id: string;
  data: PaidInfo;
}
