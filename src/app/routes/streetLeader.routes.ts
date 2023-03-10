import { Router, Request, Response, NextFunction } from 'express';
import { StreetLeaderDependency as container } from '@app/dependencyInjection/streetLeader';

export const register = (router: Router) => {
  const createController = container.get('StreetLeader.Controller.Create');
  const getAllController = container.get('StreetLeader.Controller.GetAll');
  const findController = container.get('StreetLeader.Controller.Find');
  const updateController = container.get('StreetLeader.Controller.Update');
  const deleteController = container.get('StreetLeader.Controller.Destroy');

  router.get('/street-leader', (req: Request, res: Response, next: NextFunction) => {
    return getAllController.run(req, res, next);
  });
  router.post('/street-leader/create', (req: Request, res: Response, next: NextFunction) => {
    return createController.run(req, res, next);
  });
  router.get('/street-leader/show/:id', (req: Request, res: Response, next: NextFunction) => {
    return findController.run(req, res, next);
  });
  router.put('/street-leader/update/:id', (req: Request, res: Response, next: NextFunction) => {
    return updateController.run(req, res, next);
  });
  router.delete('/street-leader/delete/:id', (req: Request, res: Response, next: NextFunction) => {
    return deleteController.run(req, res, next);
  });
};
