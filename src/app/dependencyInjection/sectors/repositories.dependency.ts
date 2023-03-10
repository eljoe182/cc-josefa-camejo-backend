import container from '@shared/infrastructure/dependency';
import { Reference } from 'node-dependency-injection';

import SectorsRepository from '@feat/sectors/infrastructure/repositories/Sectors.repository';

container.register('Sectors.Repository', SectorsRepository).addArgument(new Reference('DataSource.Mongo.Client'));

export default container;
