import { Router, Request, Response, NextFunction } from 'express';
import { SectorsDependency as container } from '@app/dependencyInjection/sectors';
import { IBaseController } from '@shared/domain/BaseController';

export const register = (router: Router) => {
  const middleware: IBaseController = container.get('Authentication.Middleware');
  const createController: IBaseController = container.get('Sectors.Controller.Create');
  const getAllController: IBaseController = container.get('Sectors.Controller.GetAll');
  const findController: IBaseController = container.get('Sectors.Controller.Find');
  const updateController: IBaseController = container.get('Sectors.Controller.Update');
  const deleteController: IBaseController = container.get('Sectors.Controller.Destroy');

  router.get('/sectors', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return getAllController.run(req, res, next);
  });
  router.post('/sectors/create', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return createController.run(req, res, next);
  });
  router.get('/sectors/show/:id', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return findController.run(req, res, next);
  });
  router.put('/sectors/update/:id', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return updateController.run(req, res, next);
  });
  router.delete('/sectors/delete/:id', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return deleteController.run(req, res, next);
  });
};
