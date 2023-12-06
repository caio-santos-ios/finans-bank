import { Controller, Get, Post, Body, Request, Param, UseGuards } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('transfers')
export class TransfersController {
  constructor(private readonly transfersService: TransfersService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createTransferDto: CreateTransferDto, @Request() req) {
    return this.transfersService.create(createTransferDto, req.user.id);
  }
  
  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Request() req) {
    return this.transfersService.findAll(req.user.id);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.transfersService.findOne(+id);
  }
}
