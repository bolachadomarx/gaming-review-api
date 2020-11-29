import * as mongoose from 'mongoose'

export const GameSchema = new mongoose.Schema({
  idGame: { type: String, required: true },
  review: { type: String, required: true },
  rating: { type: Number, required: true },
})

export interface Game extends mongoose.Document {
  id: string
  idGame: string
  review: string
  rating: number
}
