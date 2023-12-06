import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { AccountsService } from '../accounts/accounts.service';
import { JwtService } from '@nestjs/jwt';
import { compare, compareSync } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private accountService: AccountsService){}

  async login(createAuthDto: CreateAuthDto) {
    
    const user = await this.accountService.finByEmail(createAuthDto.email)
    
    if(!user) throw new UnauthorizedException("Email ou senha incorretos")

    const passwordValidatad = compareSync(createAuthDto.password, user.password)

    if(!passwordValidatad) throw new UnauthorizedException("Email ou senha incorretos")

    return {
      token: this.jwtService.sign({email: createAuthDto.email}, { subject: String(user.id) }),
      id: user.id
    }
  }
}
