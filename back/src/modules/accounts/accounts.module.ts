import { Module, BadRequestException } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { PrismaService } from 'src/database/prisma.service';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './tmp',
        filename: (_, file, cb) => {
          cb(null, file.originalname);
        },
      }),
      fileFilter: (_, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'audio/mpeg') {
          cb(null, true);
        } else {
          cb(
            new BadRequestException('Only jpeg and mp3 format allowed'),
            false,
          );
        }
      },
    }),
  ],
  controllers: [AccountsController],
  providers: [AccountsService, PrismaService],
  exports: [AccountsService]
})
export class AccountsModule {}
