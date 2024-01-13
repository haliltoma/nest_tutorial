import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('middleware de');
    if (req.body.name === 'halil') {
      return res.send('calisiyormu');
    }
    const { authorization } = req.headers;
    if (!authorization) {
      throw new HttpException('authorization not found', HttpStatus.FORBIDDEN);
    }
    if (authorization === 'haliltoma') next();
    else
      throw new HttpException('authorization not found', HttpStatus.FORBIDDEN);
  }
}
