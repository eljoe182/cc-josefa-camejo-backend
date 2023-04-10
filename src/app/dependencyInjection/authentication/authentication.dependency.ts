import { Reference } from 'node-dependency-injection';
import container from '@shared/infrastructure/dependency';

import SignInUseCase from '@feat/authentication/application/signIn.useCase';
import SignInController from '@app/controllers/authentication/SignIn.controller';

import SignUpUseCase from '@feat/authentication/application/signUp.useCase';
import SignUpController from '@app/controllers/authentication/SignUp.controllers';
import TokenUseCase from '@feat/authentication/application/token.useCase';
import AuthenticationMiddleware from '@app/middleware/authentication.middleware';

container.register('Authentication.Middleware', AuthenticationMiddleware);

container.register('Token.UseCase', TokenUseCase);

container
  .register('Login.UseCase.SignIn', SignInUseCase)
  .addArgument(new Reference('Login.Repository'))
  .addArgument(new Reference('Token.UseCase'));
container.register('Login.Controller.SignIn', SignInController).addArgument(new Reference('Login.UseCase.SignIn'));

container.register('Login.UseCase.SignUp', SignUpUseCase).addArgument(new Reference('Login.Repository'));
container.register('Login.Controller.SignUp', SignUpController).addArgument(new Reference('Login.UseCase.SignUp'));

export default container;
