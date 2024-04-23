import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { UsersService } from '../users/users.service';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({ usernameFiled: 'email' });
  }

  async validate(email: string, password: string) {
    try {
      console.log('여기는 지나감');
      return await this.usersService.veryfiUser(email, password);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
