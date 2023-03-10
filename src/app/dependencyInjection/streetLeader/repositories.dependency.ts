import container from '@shared/infrastructure/dependency';
import { Reference } from 'node-dependency-injection';

import StreetLeaderRepository from '@feat/streetLeader/infrastructure/repositories/StreetLeader.repository';

container
  .register('StreetLeader.Repository', StreetLeaderRepository)
  .addArgument(new Reference('DataSource.Mongo.Client'));

export default container;
