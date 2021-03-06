import { IsEmpty, IsString } from 'class-validator'
import { Review } from '../review/review'

export class CreateGameDto {
  @IsEmpty()
  @IsString()
  name: string

  @IsEmpty()
  @IsString()
  image: string

  @IsEmpty()
  @IsString()
  idConsole: string

  @IsEmpty()
  @IsString()
  brand: string

  @IsEmpty()
  @IsString()
  description: string

  @IsEmpty()
  @IsString()
  developer: string

  @IsEmpty()
  @IsString()
  genre: string

  reviews: Review[]
}
