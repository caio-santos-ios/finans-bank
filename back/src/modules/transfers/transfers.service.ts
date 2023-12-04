import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { UpdateTransferDto } from './dto/update-transfer.dto';
import { PrismaService } from 'src/database/prisma.service';
import { AccountsService } from '../accounts/accounts.service';
import { Transfer } from './entities/transfer.entity';

@Injectable()
export class TransfersService {
  constructor(private prisma: PrismaService, private accountService: AccountsService){}
  async create(createTransferDto: CreateTransferDto, sendAccountId: any) {
    const findUser = await this.accountService.findOne(createTransferDto.receiveAccountId)

    if(!findUser) throw new NotFoundException("Usuário não existe")

    const findUserSend = await this.accountService.findOne(sendAccountId)
    
    if(Number(findUserSend.balance) <= 0) throw new ConflictException("Sem saldo para a transfencia")
    
    const valueTranfer = Number(findUserSend.balance) - Number(createTransferDto.value)

    if(Number(valueTranfer) < 0) throw new ConflictException("Sem saldo para a transfencia")
    
    const transfer = new Transfer()
    Object.assign(transfer, {...createTransferDto})
    
    sendAccountId = Number(sendAccountId)
    const myTransfer = await this.prisma.transfer.create({data: {...createTransferDto, sendAccountId}})
    
    await this.accountService.updateBelace(sendAccountId, createTransferDto.receiveAccountId, createTransferDto.value)
    
    return myTransfer;
  }

  async findAll() {
    const transfers = await this.prisma.transfer.findMany()
    return transfers;
  }

  async findOne(id: number) {
    const transfer = await this.prisma.transfer.findFirst({
      where: { id }
    })
    return transfer;
  }
}
