import * as mongoose from 'mongoose'

export const GameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  developer: { type: String, required: true },
  genre: { type: String, required: true },
})

export interface Game extends mongoose.Document {
  id: string
  name: string
  description: string
  developer: string
  genre: string
}