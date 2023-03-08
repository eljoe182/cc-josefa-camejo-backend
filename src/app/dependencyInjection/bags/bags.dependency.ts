import { Reference } from 'node-dependency-injection';
import container from '@shared/infrastructure/dependency';

import CreateBagController from '@app/controllers/bags/CreateBag.controller';
import CreateBagUseCase from '@feat/bags/application/CreateBag.useCase';

import GetAllBagsController from '@app/controllers/bags/GetAllBags.controller';
import GetAllBagsUseCase from '@feat/bags/application/GetAllBags.useCase';

import FindBagController from '@app/controllers/bags/FindBag.controller';
import FindBagUseCase from '@feat/bags/application/FindBag.useCase';

import UpdateBagController from '@app/controllers/bags/UpdateBag.controller';
import UpdateBagUseCase from '@feat/bags/application/UpdateBag.useCase';

import DeleteBagController from '@app/controllers/bags/DeleteBag.controller';
import DeleteBagUseCase from '@feat/bags/application/DeleteBag.useCase';

container.register('Bags.UseCase.GetAll', GetAllBagsUseCase).addArgument(new Reference('Bags.Repository'));
container.register('Bags.Controller.GetAll', GetAllBagsController).addArgument(new Reference('Bags.UseCase.GetAll'));

container.register('Bags.UseCase.Create', CreateBagUseCase).addArgument(new Reference('Bags.Repository'));
container.register('Bags.Controller.Create', CreateBagController).addArgument(new Reference('Bags.UseCase.Create'));

container.register('Bags.UseCase.Find', FindBagUseCase).addArgument(new Reference('Bags.Repository'));
container.register('Bags.Controller.Find', FindBagController).addArgument(new Reference('Bags.UseCase.Find'));

container.register('Bags.UseCase.Update', UpdateBagUseCase).addArgument(new Reference('Bags.Repository'));
container.register('Bags.Controller.Update', UpdateBagController).addArgument(new Reference('Bags.UseCase.Update'));

container.register('Bags.UseCase.Delete', DeleteBagUseCase).addArgument(new Reference('Bags.Repository'));
container.register('Bags.Controller.Delete', DeleteBagController).addArgument(new Reference('Bags.UseCase.Delete'));

export default container;
