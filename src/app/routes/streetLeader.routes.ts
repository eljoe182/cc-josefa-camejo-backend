import { Router, Request, Response, NextFunction } from 'express';
import { StreetLeaderDependency as container } from '@app/dependencyInjection/streetLeader';
import { IBaseController } from '@shared/domain/BaseController';

export const register = (router: Router) => {
  const middleware: IBaseController = container.get('Authentication.Middleware');
  const createController: IBaseController = container.get('StreetLeader.Controller.Create');
  const getAllController: IBaseController = container.get('StreetLeader.Controller.GetAll');
  const findController: IBaseController = container.get('StreetLeader.Controller.Find');
  const updateController: IBaseController = container.get('StreetLeader.Controller.Update');
  const deleteController: IBaseController = container.get('StreetLeader.Controller.Destroy');

  router.get('/street-leader', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return getAllController.run(req, res, next);
  });
  router.post('/street-leader/create', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return createController.run(req, res, next);
  });
  router.get('/street-leader/show/:id', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return findController.run(req, res, next);
  });
  router.put('/street-leader/update/:id', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return updateController.run(req, res, next);
  });
  router.delete('/street-leader/delete/:id', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return deleteController.run(req, res, next);
  });
};
