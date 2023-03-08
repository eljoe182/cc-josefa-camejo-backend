import { Reference } from 'node-dependency-injection';
import container from '@app/dependencyInjection/shared';

import BagsRepository from '@feat/bags/infrastructure/repositories/Bags.repository';

container.register('Bags.Repository', BagsRepository).addArgument(new Reference('DataSource.Mongo.Client'));

export default container;
