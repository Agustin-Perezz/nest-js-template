import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { SignInDto } from '@auth/application/dto/sign-in.dto';
import { SignUpDto } from '@auth/application/dto/sign-up.dto';
import { AuthService } from '@auth/application/services/auth.service';

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
