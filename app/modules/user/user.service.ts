import { HttpStatus, Injectable } from '@nestjs/common';
import { MainResponseType } from 'app/common/type/mainResponse.type';
import { InsertUserDto } from './schemas/insert';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async insert(dto: InsertUserDto): Promise<MainResponseType> {
    const result = await this.userRepository.insert(dto);

    return {
      statusCode: HttpStatus.OK,
      data: result,
    };
  }
}
