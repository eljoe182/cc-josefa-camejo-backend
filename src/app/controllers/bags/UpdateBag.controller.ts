import { Request, Response, NextFunction } from 'express';
import { IBaseController } from '@shared/domain/BaseController';
import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import { UpdateBagContract } from '@feat/bags/domain/contracts/UpdateBag.contract';

export default class UpdateBagController implements IBaseController {
  constructor(private useCase: IBaseUseCase) {}

  async run(req: Request, res: Response, _next: NextFunction): Promise<void> {
    const { params, body } = req;
    const id = params?.id;
    const data = body;
    const dataUseCase = { id, data } as UpdateBagContract;
    const result = await this.useCase.execute(dataUseCase);
    res.status(200).json(result);
  }
}
