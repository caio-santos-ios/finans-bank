import { Module } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { TransfersController } from './transfers.controller';
import { PrismaService } from 'src/database/prisma.service';
import { AccountsService } from '../accounts/accounts.service';

@Module({
  controllers: [TransfersController],
  providers: [TransfersService, PrismaService, AccountsService],
})
export class TransfersModule {}
