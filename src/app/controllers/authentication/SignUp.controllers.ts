import { Request, Response, NextFunction } from 'express';
import { IBaseController } from '@shared/domain/BaseController';
import { IBaseUseCase } from '@shared/domain/BaseUseCase';

export default class SignUpController implements IBaseController {
  constructor(private useCase: IBaseUseCase) {}

  async run(req: Request, res: Response, _next: NextFunction): Promise<void> {
    const result = await this.useCase.execute(req.body);
    res.status(200).json(result);
  }
}
