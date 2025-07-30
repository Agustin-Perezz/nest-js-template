import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  HttpCode,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(201)
  @Post('sign-up')
  async signUp(
    @Body() body: { email: string; password: string; name?: string },
  ) {
    const hashedPassword = await this.authService.hashPassword(body.password);
    await this.authService.usersService.create({
      email: body.email,
      name: body.name,
      password: hashedPassword,
    });
  }

  @Post('sign-in')
  async signIn(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.signIn(user);
  }
}
