import { Sector } from '@feat/sectors/infrastructure/entities/Sector.entity';

export interface UpdateSectorContract {
  id: string;
  data: Sector;
}
