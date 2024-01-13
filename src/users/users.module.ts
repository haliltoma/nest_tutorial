import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersMiddleware } from './users.middleware';
import { UserAnotherMiddleware } from './user-another/user-another.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UsersMiddleware)
      .forRoutes(
        {
          path: 'users',
          method: RequestMethod.POST,
        },
        {
          path: 'users/:id',
          method: RequestMethod.GET,
        },
      )
      .apply(UserAnotherMiddleware)
      .forRoutes({
        path: 'users/deneme',
        method: RequestMethod.GET,
      });
  }
}
