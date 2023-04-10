import { Request, Response, NextFunction, Router } from 'express';
import { IBaseController } from '@shared/domain/BaseController';
import { HouseholdHeadDependency as container } from '../dependencyInjection/householdHead';

export const register = (router: Router) => {
  const middleware: IBaseController = container.get('Authentication.Middleware');
  const getAllController: IBaseController = container.get('HouseholdHead.Controller.GetAll');
  const createController: IBaseController = container.get('HouseholdHead.Controller.Create');
  const findController: IBaseController = container.get('HouseholdHead.Controller.Find');
  const updateController: IBaseController = container.get('HouseholdHead.Controller.Update');
  const deleteController: IBaseController = container.get('HouseholdHead.Controller.Delete');

  router.get('/household-head', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return getAllController.run(req, res, next);
  });
  router.post('/household-head/create', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return createController.run(req, res, next);
  });
  router.get('/household-head/show/:id', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return findController.run(req, res, next);
  });
  router.put('/household-head/update/:id', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return updateController.run(req, res, next);
  });
  router.delete('/household-head/delete/:id', middleware.run, (req: Request, res: Response, next: NextFunction) => {
    return deleteController.run(req, res, next);
  });
};
