import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { parse } from 'path';

@Injectable()
export class UsersPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log(value, 'deneme');
    console.log(metadata, 'deneme2');
    const parseAgetoInt = parseInt(value.age.toString());
    if (isNaN(parseAgetoInt)) {
      console.log(parseAgetoInt, 'deneme3');
      throw new HttpException('age must be a number', HttpStatus.BAD_REQUEST);
    } else {
      console.log(`${parseAgetoInt} is a number`);
      return { ...value, age: parseAgetoInt };
    }
  }
}
