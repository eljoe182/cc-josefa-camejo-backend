import { StreetLeader } from '@feat/streetLeader/infrastructure/entities/StreetLeader.entity';

export interface UpdateStreetLeaderContract {
  id: string;
  data: StreetLeader;
}
