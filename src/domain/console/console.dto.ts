import { IsEmpty, IsString } from 'class-validator'

export class CreateConsoleDto {
  @IsEmpty()
  @IsString()
  name: string

  @IsEmpty()
  @IsString()
  brand: string
}
