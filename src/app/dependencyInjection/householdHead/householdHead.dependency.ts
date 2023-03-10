import { Reference } from 'node-dependency-injection';
import container from '@shared/infrastructure/dependency';

import GetAllHouseholdHeadUseCase from '@feat/householdHeader/application/GetAllHouseholdHead.useCase';
import CreateHouseholdHeadUseCase from '@feat/householdHeader/application/CreateHouseholdHead.useCase';
import FindHouseholdHeadUseCase from '@feat/householdHeader/application/FindHouseholdHead.useCase';
import UpdateHouseholdHeadUseCase from '@feat/householdHeader/application/UpdateHouseholdHead.useCase';
import DeleteHouseholdHeadUseCase from '@feat/householdHeader/application/DeleteHouseholdHead.useCase';

import GetAllHouseholdHeadController from '@app/controllers/householdHead/GetAllHouseholdHead.controller';
import CreateHouseholdHeadController from '@app/controllers/householdHead/CreateHouseholdHead.controller';
import FindHouseholdHeadController from '@app/controllers/householdHead/FindHouseholdHead.controller';
import UpdateHouseholdHeadController from '@app/controllers/householdHead/UpdateHouseholdHead.controller';
import DeleteHouseholdHeadController from '@app/controllers/householdHead/DeleteHouseholdHead.controller';

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
