import { Reference } from 'node-dependency-injection';
import container from '@app/dependencyInjection/shared';

import HouseholdHeadRepository from '@feat/householdHeader/infrastructure/repositories/HouseholdHead.repository';

container
  .register('HouseholdHead.Repository', HouseholdHeadRepository)
  .addArgument(new Reference('DataSource.Mongo.Client'));

export default container;
