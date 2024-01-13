import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserType } from 'src/utils/types';
import { Repository } from 'typeorm';
import { CreateUserParams } from './utils/types';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  findUser(id: number) {
    return this.userRepository.findOneBy({ id });
  }
  createUser(userDetails: CreateUserParams) {
    const user = this.userRepository.create({
      ...userDetails,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return this.userRepository.save(user);
  }
}
