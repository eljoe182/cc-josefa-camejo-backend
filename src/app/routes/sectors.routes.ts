import { Router, Request, Response, NextFunction } from 'express';
import { SectorsDependency as container } from '@app/dependencyInjection/sectors';

export const register = (router: Router) => {
  const createController = container.get('Sectors.Controller.Create');
  const getAllController = container.get('Sectors.Controller.GetAll');
  const findController = container.get('Sectors.Controller.Find');
  const updateController = container.get('Sectors.Controller.Update');
  const deleteController = container.get('Sectors.Controller.Destroy');

  router.get('/sectors', (req: Request, res: Response, next: NextFunction) => {
    return getAllController.run(req, res, next);
  });
  router.post('/sectors/create', (req: Request, res: Response, next: NextFunction) => {
    return createController.run(req, res, next);
  });
  router.get('/sectors/show/:id', (req: Request, res: Response, next: NextFunction) => {
    return findController.run(req, res, next);
  });
  router.put('/sectors/update/:id', (req: Request, res: Response, next: NextFunction) => {
    return updateController.run(req, res, next);
  });
  router.delete('/sectors/delete/:id', (req: Request, res: Response, next: NextFunction) => {
    return deleteController.run(req, res, next);
  });
};
