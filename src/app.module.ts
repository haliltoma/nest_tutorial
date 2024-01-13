import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'testuser',
      password: 'haliltoma',
      database: 'nestjs_tutorial',
      autoLoadEntities: true,
      synchronize: true,
      entities: [User],
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
