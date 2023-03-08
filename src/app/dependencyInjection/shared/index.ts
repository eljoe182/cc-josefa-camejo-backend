import { Reference } from 'node-dependency-injection';

import { MongoDBConfig } from '@shared/infrastructure/persistance/client/MongoDBConfig';
import { MongoDBClient } from '@shared/infrastructure/persistance/client/MongoDBClient';
import container from '@shared/infrastructure/dependency';
import WinstonLogger from '@shared/infrastructure/logger/WinstonLogger';

container.register('Logger', WinstonLogger);

container.register('DataSource.Mongo.Config', MongoDBConfig);
container.register('DataSource.Mongo.Client', MongoDBClient).addArgument(new Reference('DataSource.Mongo.Config'));

export default container;
