import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class UserAnotherMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('another middleware');
    next();
  }
}
