import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Account } from './entities/account.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class AccountsService {
  
  constructor(private prisma: PrismaService){}

  async create(createAccountDto: CreateAccountDto) {
    const findEmail = await this.prisma.account.findFirst({
      where: {email: createAccountDto.email}
    })

    if(findEmail) throw new ConflictException("Email inválido")

    const user = new Account()

    Object.assign(user, {...createAccountDto})

    const myUser = await this.prisma.account.create({data:{...createAccountDto}})

    return plainToInstance(Account, myUser);
  }

  async findAll(req: any) {
    // const users = await this.prisma.account.findMany()
    
    // if(req.user.admin) return plainToInstance(Account, users)

    const myUser = this.prisma.account.findUnique({
      where: { id: Number(req.user.id) }
    })

    return plainToInstance(Account, myUser);
  }

  async findOne(id: number) {
    id = Number(id)
    const findUser = await this.prisma.account.findFirst({
      where: {id},
      include: {
        sendTransfers: {
          select: {
            id: true,
            receiveAccountId: true,
            value: true
          }
        },
        receiveTransfers: {
          select: {
            id: true,
            sendAccountId: true,
            value: true
          }
        }
      }
    })

    if(!findUser) throw new NotFoundException("Usuário não existe")
    return plainToInstance(Account, findUser);
    return findUser
  }

  async finByEmail(email: string){
    const findUser = await this.prisma.account.findFirst({
      where: {email}
    })

    if(!findUser) throw new NotFoundException("Usuário não existe")

    return findUser
  }

  async update(id: number, updateAccountDto: any) {
    id = Number(id)

    const findUser = await this.prisma.account.findFirst({
      where: {id}
    })

    if(!findUser) throw new NotFoundException("Usuário não existe")

    const newBalance = Number(updateAccountDto.balance) + Number(findUser.balance)
    updateAccountDto.balance = String(newBalance)

    const updateAccount = await this.prisma.account.update({where: { id }, data: { ...updateAccountDto }})
    
    return plainToInstance(Account, updateAccount);
  }

  async updateBelace (sendUser: any, receiveAccountId: number, value: any) {
    const verifyBalance = await this.prisma.account.findFirst({where: {id: sendUser}})

    if(Number(verifyBalance.balance) <= 0) throw new ConflictException("Sem saldo para transferencia")
    
    const findAccountReceive = await this.prisma.account.findFirst({where: { id: receiveAccountId }})
    
    const newBalenceSend = Number(verifyBalance.balance) - Number(value)
    const newBalenceReceive = Number(findAccountReceive.balance) + Number(value)

    await this.prisma.account.update({where : { id: sendUser }, data: { balance: String(newBalenceSend) }})
    await this.prisma.account.update({where : { id: receiveAccountId }, data: { balance: String(newBalenceReceive) }})

    return 
  }

 async remove(id: number) {
    id = Number(id)
    const findUser = await this.prisma.account.findUnique({
      where: {id}
    })

    if(!findUser) throw new NotFoundException("Usuário não existe")

    await this.prisma.account.delete({where: {id}})
    
    return;
  }
}
