import { Reference } from 'node-dependency-injection';
import container from '@shared/infrastructure/dependency';

import GetAllPaidInfoUseCase from '@feat/paidInfo/application/GetAllPaidInfo.useCase';
import CreatePaidInfoUseCase from '@feat/paidInfo/application/CreatePaidInfo.useCase';
import FindPaidInfoUseCase from '@feat/paidInfo/application/FindPaidInfo.useCase';
import UpdatePaidInfoUseCase from '@feat/paidInfo/application/UpdatePaidInfo.useCase';
import DeletePaidInfoUseCase from '@feat/paidInfo/application/DeletePaidInfo.useCase';

import GetAllPaidInfoController from '@app/controllers/padInfo/GetAllPaidInfo.controller';
import CreatePaidInfoController from '@app/controllers/padInfo/CreatePaidInfo.controller';
import FindPaidInfoController from '@app/controllers/padInfo/FindPaidInfo.controller';
import UpdatePaidInfoController from '@app/controllers/padInfo/UpdatePaidInfo.controller';
import DeletePaidInfoController from '@app/controllers/padInfo/DeletePaidInfo.controller';

container.register('PaidInfo.UseCase.GetAll', GetAllPaidInfoUseCase).addArgument(new Reference('PaidInfo.Repository'));
container.register('PaidInfo.UseCase.Create', CreatePaidInfoUseCase).addArgument(new Reference('PaidInfo.Repository'));
container.register('PaidInfo.UseCase.Find', FindPaidInfoUseCase).addArgument(new Reference('PaidInfo.Repository'));
container.register('PaidInfo.UseCase.Update', UpdatePaidInfoUseCase).addArgument(new Reference('PaidInfo.Repository'));
container.register('PaidInfo.UseCase.Delete', DeletePaidInfoUseCase).addArgument(new Reference('PaidInfo.Repository'));

container
  .register('PaidInfo.Controller.GetAll', GetAllPaidInfoController)
  .addArgument(new Reference('PaidInfo.UseCase.GetAll'));

container
  .register('PaidInfo.Controller.Create', CreatePaidInfoController)
  .addArgument(new Reference('PaidInfo.UseCase.Create'));

container
  .register('PaidInfo.Controller.Find', FindPaidInfoController)
  .addArgument(new Reference('PaidInfo.UseCase.Find'));

container
  .register('PaidInfo.Controller.Update', UpdatePaidInfoController)
  .addArgument(new Reference('PaidInfo.UseCase.Update'));

container
  .register('PaidInfo.Controller.Delete', DeletePaidInfoController)
  .addArgument(new Reference('PaidInfo.UseCase.Delete'));

export default container;
