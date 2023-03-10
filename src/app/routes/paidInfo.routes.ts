import { Request, Response, NextFunction, Router } from 'express';
import { IBaseController } from '@shared/domain/BaseController';
import { PaidInfoDependency as container } from '../dependencyInjection/paidInfo';

export const register = (router: Router) => {
  const getAllController: IBaseController = container.get('PaidInfo.Controller.GetAll');
  const createController: IBaseController = container.get('PaidInfo.Controller.Create');
  const findController: IBaseController = container.get('PaidInfo.Controller.Find');
  const updateController: IBaseController = container.get('PaidInfo.Controller.Update');
  const deleteController: IBaseController = container.get('PaidInfo.Controller.Delete');

  router.get('/paid-info', (req: Request, res: Response, next: NextFunction) => {
    return getAllController.run(req, res, next);
  });
  router.post('/paid-info/create', (req: Request, res: Response, next: NextFunction) => {
    return createController.run(req, res, next);
  });
  router.get('/paid-info/show/:id', (req: Request, res: Response, next: NextFunction) => {
    return findController.run(req, res, next);
  });
  router.put('/paid-info/update/:id', (req: Request, res: Response, next: NextFunction) => {
    return updateController.run(req, res, next);
  });
  router.delete('/paid-info/delete/:id', (req: Request, res: Response, next: NextFunction) => {
    return deleteController.run(req, res, next);
  });
};
