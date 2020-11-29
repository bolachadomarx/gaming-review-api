import * as mongoose from 'mongoose'

export const ConsoleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
})

export interface Console extends mongoose.Document {
  id: string
  name: string
  brand: string
}
