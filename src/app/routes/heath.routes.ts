import { Router, Request, Response, NextFunction } from 'express';
import container from '@app/dependencyInjection/health';
import { IBaseController } from '@shared/domain/BaseController';

export const register = (router: Router) => {
  const controller: IBaseController = container.get('Controller.Health.GetStatus');
  router.get('/health', (req: Request, res: Response, next: NextFunction) => {
    return controller.run(req, res, next);
  });
};
