import { IsDecimal, IsInt, IsString } from "class-validator";

export class CreateTransferDto {
    @IsString()
    value: string;

    @IsInt()
    receiveAccountId: number;
}
