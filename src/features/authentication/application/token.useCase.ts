import jwt from 'jsonwebtoken';
import { IBaseUseCase } from '@shared/domain/BaseUseCase';
import config from '@app/config';

export default class TokenUseCase implements IBaseUseCase {
  async execute(payload: unknown): Promise<string> {
    const result = jwt.sign({ payload }, config.SECRET_KEY, {
      expiresIn: config.TOKEN_EXPIRES_IN,
    });
    return result;
  }
}
