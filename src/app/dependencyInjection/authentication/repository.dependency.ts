import { Reference } from 'node-dependency-injection';
import container from '@app/dependencyInjection/shared';

import LoginRepository from '@feat/authentication/infrastructure/repositories/Login.repository';

container.register('Login.Repository', LoginRepository).addArgument(new Reference('DataSource.Mongo.Client'));

export default container;
