import { Router, Request, Response, NextFunction } from 'express';
import { AuthenticationDependency as container } from '@app/dependencyInjection/authentication';
import { IBaseController } from '@shared/domain/BaseController';

export const register = (router: Router) => {
  const signInController: IBaseController = container.get('Login.Controller.SignIn');
  const signUpController: IBaseController = container.get('Login.Controller.SignUp');

  router.post('/sign-in', (req: Request, res: Response, next: NextFunction) => {
    return signInController.run(req, res, next);
  });
  
  router.post('/sign-up', (req: Request, res: Response, next: NextFunction) => {
    return signUpController.run(req, res, next);
  });
};
