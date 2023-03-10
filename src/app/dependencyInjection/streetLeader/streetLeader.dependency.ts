import container from '@shared/infrastructure/dependency';
import { Reference } from 'node-dependency-injection';

import GetAllStreetLeaderUseCase from '@feat/streetLeader/application/GetAllStreetLeader.useCase';
import FindStreetLeaderUseCase from '@feat/streetLeader/application/FindStreetLeader.useCase';
import CreateStreetLeaderUseCase from '@feat/streetLeader/application/CreateStreetLeader.useCase';
import UpdateStreetLeaderUseCase from '@feat/streetLeader/application/UpdateStreetLeader.useCase';
import DeleteStreetLeaderUseCase from '@feat/streetLeader/application/DeleteStreetLeader.useCase';
import GetAllStreetLeaderController from '@app/controllers/streetLeader/GetAllStreetLeader.controller';
import FindStreetLeaderController from '@app/controllers/streetLeader/FindStreetLeader.controller';
import CreateStreetLeaderController from '@app/controllers/streetLeader/CreateStreetLeader.controller';
import UpdateStreetLeaderController from '@app/controllers/streetLeader/UpdateStreetLeader.controller';
import DeleteStreetLeaderController from '@app/controllers/streetLeader/DeleteStreetLeader.controller';

container.register('StreetLeader.UseCase.GetAll', GetAllStreetLeaderUseCase).addArgument(new Reference('StreetLeader.Repository'));
container.register('StreetLeader.UseCase.Find', FindStreetLeaderUseCase).addArgument(new Reference('StreetLeader.Repository'));
container.register('StreetLeader.UseCase.Create', CreateStreetLeaderUseCase).addArgument(new Reference('StreetLeader.Repository'));
container.register('StreetLeader.UseCase.Update', UpdateStreetLeaderUseCase).addArgument(new Reference('StreetLeader.Repository'));
container.register('StreetLeader.UseCase.Destroy', DeleteStreetLeaderUseCase).addArgument(new Reference('StreetLeader.Repository'));

container
  .register('StreetLeader.Controller.GetAll', GetAllStreetLeaderController)
  .addArgument(new Reference('StreetLeader.UseCase.GetAll'));

container.register('StreetLeader.Controller.Find', FindStreetLeaderController).addArgument(new Reference('StreetLeader.UseCase.Find'));

container
  .register('StreetLeader.Controller.Create', CreateStreetLeaderController)
  .addArgument(new Reference('StreetLeader.UseCase.Create'));

container
  .register('StreetLeader.Controller.Update', UpdateStreetLeaderController)
  .addArgument(new Reference('StreetLeader.UseCase.Update'));

container
  .register('StreetLeader.Controller.Destroy', DeleteStreetLeaderController)
  .addArgument(new Reference('StreetLeader.UseCase.Destroy'));

export default container;
