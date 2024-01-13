import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUser() {
    return 'user';
  }
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
