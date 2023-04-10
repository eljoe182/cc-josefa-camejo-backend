import { Request, Response, NextFunction, Router } from 'express';
import { IBaseController } from '@shared/domain/BaseController';
import { PaidInfoDependency as container } from '../dependencyInjection/paidInfo';

export const register = (router: Router) => {
  const middleware: IBaseController = container.get('Authentication.Middleware');
  const getAllController: IBaseController = container.get('PaidInfo.Controller.GetAll');
  const createController: IBaseController = container.get('PaidInfo.Controller.Create');
  const findController: IBaseController = container.get('PaidInfo.Controller.Find');
  const updateController: IBaseController = container.get('PaidInfo.Controller.Update');
  const deleteController: IBaseController = container.get('PaidInfo.Controller.Delete');

  router.get('/paid-info', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return getAllController.run(req, res, next);
  });
  router.post('/paid-info/create', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return createController.run(req, res, next);
  });
  router.get('/paid-info/show/:id', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return findController.run(req, res, next);
  });
  router.put('/paid-info/update/:id', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return updateController.run(req, res, next);
  });
  router.delete('/paid-info/delete/:id', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return deleteController.run(req, res, next);
  });
};
