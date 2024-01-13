import { UsersService } from './users.service';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersPipe } from './users.pipe';
import { UsersGuard } from './users.guard';
@Controller('users')
@UseGuards(UsersGuard)
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get('/')
  getUsers() {
    return this.userService.fetchUsers();
  }
  @Post('/')
  @UsePipes(new ValidationPipe())
  createUser(
    @Req() req: Request,
    @Res() res: Response,
    @Body(UsersPipe) userData: CreateUserDto,
  ) {
    console.log(userData, 'controller');
    if (req.body.name === 'halil') {
      return res.send(req.body);
    }
    return res.send({
      success: true,
      message: 'user created',
      data: userData,
    });
  }
  @Get('/:id')
  getUserById(
    @Req() req: Request,
    @Res() res: Response,
    @Param('id', ParseIntPipe) numberInt: number,
  ) {
    console.log(numberInt);
    const user = this.userService.fetchUSerById(numberInt);
    if (!user) {
      throw new HttpException('user not found', HttpStatus.BAD_REQUEST);
    }
    return res.send(user);
  }
}
