import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { TypeBoxValidationPipe } from 'app/common/pipe/typeboxValidation.pipe';
import { MainResponseType } from 'app/common/type/mainResponse.type';
import { InsertUserDto, insertUserSchema } from './schemas/insert';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new TypeBoxValidationPipe(insertUserSchema))
  private async getHello(@Body() dto: InsertUserDto): Promise<MainResponseType> {
    return await this.userService.insert(dto);
  }
}
