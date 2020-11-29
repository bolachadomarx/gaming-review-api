import 'module-alias/register'
import express from 'express'
import setupMiddlewares from '@/main/configs/middlewares'
import setupRoutes from '@/main/configs/routes'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
setupMiddlewares(app)
setupRoutes(app)

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })

app.listen(process.env.PORT || 3000, () => {
  console.log('Live on http://localhost:3000')
})
