import { IBaseController } from '@shared/domain/BaseController';
import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { Request, Response, NextFunction } from 'express';

export default class GetAllHouseholdHeadController implements IBaseController {
  constructor(private useCase: IBaseUseCase) {}

  async run(req: Request, res: Response, _next: NextFunction): Promise<void> {
    const params = req.params;
    const result = await this.useCase.execute(params);
    res.status(200).json(result);
  }
}
