import { Reference } from 'node-dependency-injection';
import container from '@shared/infrastructure/dependency';

import CreateHouseholdHeadUseCase from '@feat/families/application/CreateHouseholdHead.useCase';
import GetAllHouseholdHeadUseCase from '@feat/families/application/GetAllHouseholdHead.useCase';
import FindHouseholdHeadUseCase from '@feat/families/application/FindHouseholdHead.useCase';
import UpdateHouseholdHeadUseCase from '@feat/families/application/UpdateHouseholdHead.useCase';
import DeleteHouseholdHeadUseCase from '@feat/families/application/DeleteHouseholdHead.useCase';
import CreateHouseholdHeadController from '@app/controllers/families/CreateHouseholdHead.controller';
import GetAllHouseholdHeadController from '@app/controllers/families/GetAllHouseholdHead.controller';
import FindHouseholdHeadController from '@app/controllers/families/FindHouseholdHead.controller';
import UpdateHouseholdHeadController from '@app/controllers/families/UpdateHouseholdHead.controller';
import DeleteHouseholdHeadController from '@app/controllers/families/DeleteHouseholdHead.controller';

container
  .register('HouseholdHead.UseCase.Create', CreateHouseholdHeadUseCase)
  .addArgument(new Reference('HouseholdHead.Repository'));

container
  .register('HouseholdHead.UseCase.GetAll', GetAllHouseholdHeadUseCase)
  .addArgument(new Reference('HouseholdHead.Repository'));

container
  .register('HouseholdHead.UseCase.Find', FindHouseholdHeadUseCase)
  .addArgument(new Reference('HouseholdHead.Repository'));

container
  .register('HouseholdHead.UseCase.Update', UpdateHouseholdHeadUseCase)
  .addArgument(new Reference('HouseholdHead.Repository'));

container
  .register('HouseholdHead.UseCase.Delete', DeleteHouseholdHeadUseCase)
  .addArgument(new Reference('HouseholdHead.Repository'));

container
  .register('HouseholdHead.Controller.Create', CreateHouseholdHeadController)
  .addArgument(new Reference('HouseholdHead.UseCase.Create'));

container
  .register('HouseholdHead.Controller.GetAll', GetAllHouseholdHeadController)
  .addArgument(new Reference('HouseholdHead.UseCase.GetAll'));

container
  .register('HouseholdHead.Controller.Find', FindHouseholdHeadController)
  .addArgument(new Reference('HouseholdHead.UseCase.Find'));

container
  .register('HouseholdHead.Controller.Update', UpdateHouseholdHeadController)
  .addArgument(new Reference('HouseholdHead.UseCase.Update'));

  container
  .register('HouseholdHead.Controller.Delete', DeleteHouseholdHeadController)
  .addArgument(new Reference('HouseholdHead.UseCase.Delete'));

export default container;
