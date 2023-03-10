import container from '@shared/infrastructure/dependency';
import { Reference } from 'node-dependency-injection';

import GetAllSectorsUseCase from '@feat/sectors/application/GetAllSectors.useCase';
import FindSectorUseCase from '@feat/sectors/application/FindSector.useCase';
import CreateSectorUseCase from '@feat/sectors/application/CreateSector.useCase';
import UpdateSectorUseCase from '@feat/sectors/application/UpdateSector.useCase';
import DeleteSectorUseCase from '@feat/sectors/application/DeleteSector.useCase';
import GetAllSectorController from '@app/controllers/sectors/GetAllSector.controller';
import FindSectorController from '@app/controllers/sectors/FindSector.controller';
import CreateSectorController from '@app/controllers/sectors/CreateSector.controller';
import UpdateSectorController from '@app/controllers/sectors/UpdateSector.controller';
import DeleteSectorController from '@app/controllers/sectors/DeleteSector.controller';

container.register('Sectors.UseCase.GetAll', GetAllSectorsUseCase).addArgument(new Reference('Sectors.Repository'));
container.register('Sectors.UseCase.Find', FindSectorUseCase).addArgument(new Reference('Sectors.Repository'));
container.register('Sectors.UseCase.Create', CreateSectorUseCase).addArgument(new Reference('Sectors.Repository'));
container.register('Sectors.UseCase.Update', UpdateSectorUseCase).addArgument(new Reference('Sectors.Repository'));
container.register('Sectors.UseCase.Destroy', DeleteSectorUseCase).addArgument(new Reference('Sectors.Repository'));

container
  .register('Sectors.Controller.GetAll', GetAllSectorController)
  .addArgument(new Reference('Sectors.UseCase.GetAll'));

container.register('Sectors.Controller.Find', FindSectorController).addArgument(new Reference('Sectors.UseCase.Find'));

container
  .register('Sectors.Controller.Create', CreateSectorController)
  .addArgument(new Reference('Sectors.UseCase.Create'));

container
  .register('Sectors.Controller.Update', UpdateSectorController)
  .addArgument(new Reference('Sectors.UseCase.Update'));

container
  .register('Sectors.Controller.Destroy', DeleteSectorController)
  .addArgument(new Reference('Sectors.UseCase.Destroy'));

export default container;
