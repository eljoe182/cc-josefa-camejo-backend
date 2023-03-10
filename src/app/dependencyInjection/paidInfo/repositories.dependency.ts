import { Reference } from 'node-dependency-injection';
import container from '@app/dependencyInjection/shared';

import PaidInfoRepository from '@feat/paidInfo/infrastructure/repositories/PaidInfo.repository';

container
  .register('PaidInfo.Repository', PaidInfoRepository)
  .addArgument(new Reference('DataSource.Mongo.Client'));

export default container;
