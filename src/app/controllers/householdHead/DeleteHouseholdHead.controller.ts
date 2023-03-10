import { NextFunction, Request, Response } from 'express';
import { IBaseController } from '@shared/domain/BaseController';
import { IBaseUseCase } from '@shared/domain/BaseUseCase';

export default class DeleteHouseholdHeadController implements IBaseController {
  constructor(private useCase: IBaseUseCase) {}

  async run(req: Request, res: Response, _next: NextFunction): Promise<void> {
    const { body } = req;
    const result = await this.useCase.execute(body);
    res.status(201).json(result);
  }
}
