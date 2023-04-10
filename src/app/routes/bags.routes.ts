import { Router, Request, Response, NextFunction } from 'express';
import { BagsDependency as container } from '@app/dependencyInjection/bags';
import { IBaseController } from '@shared/domain/BaseController';

export const register = (router: Router) => {
  const middleware: IBaseController = container.get('Authentication.Middleware');
  const createController: IBaseController = container.get('Bags.Controller.Create');
  const getAllController: IBaseController = container.get('Bags.Controller.GetAll');
  const findController: IBaseController = container.get('Bags.Controller.Find');
  const updateController: IBaseController = container.get('Bags.Controller.Update');
  const deleteController: IBaseController = container.get('Bags.Controller.Delete');

  router.get('/bags', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return getAllController.run(req, res, next);
  });
  router.post('/bags/create', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return createController.run(req, res, next);
  });
  router.get('/bags/show/:id', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return findController.run(req, res, next);
  });
  router.put('/bags/update/:id', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return updateController.run(req, res, next);
  });
  router.delete('/bags/delete/:id', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return deleteController.run(req, res, next);
  });
};
