import * as mongoose from 'mongoose'

export const ReviewSchema = new mongoose.Schema({
  review: { type: String, required: true },
  rating: { type: Number, required: true },
})

export interface Review extends mongoose.Document {
  review: string
  rating: number
}
