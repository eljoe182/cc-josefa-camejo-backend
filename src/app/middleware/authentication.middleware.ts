import { Request, Response, NextFunction } from 'express';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { IBaseController } from '@shared/domain/BaseController';
import config from '@app/config';

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export default class AuthenticationMiddleware implements IBaseController {
  async run(req: Request, res: Response, next: NextFunction): Promise<void> {
    const token = req.headers['x-auth-token'] as string;
    if (!token) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

    try {
      const SECRET_KEY: Secret = config.SECRET_KEY;
      const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;
      (req as CustomRequest).token = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Invalid token' });
    }
  }
}
