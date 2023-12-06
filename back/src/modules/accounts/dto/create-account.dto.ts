import { hashSync } from "bcryptjs";
import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateAccountDto {
    photoProfile: string;

    @IsString()
    name: string;
    
    @IsEmail()
    @IsString()
    email: string;

    @MinLength(8)
    @Transform(({value}: {value: string}) => hashSync(value, 10), {
        groups: ['hashPassword']
    })
    password: string;

    balance: string;
}
