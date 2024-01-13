import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private users = [{ username: 'tomy27k', email: 'anson@anson.com' }];
  fetchUsers() {
    return this.users;
  }
  createUser(userDetails: CreateUserType) {
    this.users.push(userDetails);
    return {
      success: true,
      message: 'user created',
      data: userDetails,
    };
  }
  fetchUSerById(id: number) {
    return this.users[id];
  }
}
