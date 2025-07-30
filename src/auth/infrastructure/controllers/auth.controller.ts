import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { SignUpDto } from 'src/auth/application/dto/sign-up.dto';
import { SignInDto } from 'src/auth/application/dto/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(201)
  @Post('signup')
  async signUp(@Body() credentials: SignUpDto) {
    return this.authService.signUp(credentials);
  }

  @Post('signin')
  async signIn(@Body() credentials: SignInDto) {
    return this.authService.signIn(credentials);
  }
}
