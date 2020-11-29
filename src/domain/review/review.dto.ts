import { IsOptional, IsString, IsNotEmpty, IsNumber } from 'class-validator'

export class CreateReviewDto {
  @IsNotEmpty()
  @IsString()
  idGame: string

  @IsNotEmpty()
  @IsString()
  review: string

  @IsNotEmpty()
  @IsNumber()
  rating: number
}
