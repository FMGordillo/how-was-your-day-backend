import { Optional } from '@nestjs/common';

export class CreateUserDto {
  email: string;

  password: string;

  @Optional()
  name: string;

  createdAt: Date;

  updatedAt: Date;
}
