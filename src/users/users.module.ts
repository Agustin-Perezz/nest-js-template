import { Module } from '@nestjs/common';
import { UsersController } from './infrastructure/controllers/users.controller';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './application/services/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, JwtService],
  exports: [UsersService],
})
export class UsersModule {}
