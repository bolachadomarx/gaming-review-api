import { Review, ReviewSchema } from '@/domain/review/review'
import * as mongoose from 'mongoose'

export const GameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  idConsole: { type: String, required: true },
  description: { type: String, required: true },
  developer: { type: String, required: true },
  genre: { type: String, required: true },
  reviews: [ReviewSchema],
})

export interface Game extends mongoose.Document {
  id: string
  image: string
  name: string
  idConsole: string
  description: string
  developer: string
  genre: string
  reviews: Review[]
}
