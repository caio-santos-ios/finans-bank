import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateAuthDto {
    email: string;
    password: string;
}
