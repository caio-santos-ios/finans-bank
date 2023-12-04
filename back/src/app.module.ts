import { Module } from '@nestjs/common';
import { AccountsModule } from './modules/accounts/accounts.module';
import { TransfersModule } from './modules/transfers/transfers.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [AccountsModule, TransfersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
