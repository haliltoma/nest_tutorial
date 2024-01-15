import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { Repository, UpdateResult } from 'typeorm';
import { CreateUserParams } from './utils/types';
import { UpdateUserDto } from './dtos/UpdateUser.dto';

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
  async updateUser(id: number, updateUserDetails: UpdateUserDto) {
    const updateResult: UpdateResult = await this.userRepository.update(
      { id },
      { ...updateUserDetails },
    );

    // `updateResult` içinde güncellenen kayıt sayısı ve diğer bilgiler bulunabilir.
    // Ancak, burada sadece güncellenen kullanıcıyı tekrar çekiyoruz.
    const updatedUser: User = await this.userRepository.findOneBy({ id });
    console.log(updatedUser, updateResult, id);

    return updatedUser;
  }
  deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }
}
