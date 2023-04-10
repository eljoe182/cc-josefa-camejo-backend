import { Request, Response, NextFunction } from 'express';
import { IBaseController } from '@shared/domain/BaseController';
import { IBaseUseCase } from '@shared/domain/BaseUseCase';

export default class SignInController implements IBaseController {
  constructor(private useCase: IBaseUseCase) {}

  async run(req: Request, res: Response, _next: NextFunction): Promise<void> {
    const user = req.body;
    const result = await this.useCase.execute(user);
    res.status(200).json(result);
  }
}
