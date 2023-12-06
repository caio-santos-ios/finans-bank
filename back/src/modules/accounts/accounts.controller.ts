import { Controller, Get, Post, Body, Request, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { v2 as cloudinary } from 'cloudinary';


@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('photoProfile'))
  async create(@Body() createAccountDto: CreateAccountDto, @UploadedFile() file: Express.Multer.File) {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    })

    let photoProfile;

    try {
      const result = await cloudinary.uploader.upload(file.path)
      photoProfile = result.secure_url
    } catch (error) {
      throw new error;
    }
    
    const user = {...createAccountDto, photoProfile}
    return this.accountsService.create(user);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Request() req) {
    return this.accountsService.findAll(req);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: number) {
    return this.accountsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: number, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountsService.update(id, updateAccountDto);
  }

  @Patch('transfer/:id')
  @UseGuards(JwtAuthGuard)
  updateBelace(@Param('id') id: number, @Request() req, @Body() valueTranfer: string){
    return this.accountsService.updateBelace(req.user.id, id, valueTranfer)
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: number) {
    return this.accountsService.remove(id);
  }
}
