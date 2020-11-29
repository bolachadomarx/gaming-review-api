import express from 'express'
import setupMiddlewares from '@/main/configs/middlewares'
import setupRoutes from '@/main/configs/routes'

const app = express()
setupMiddlewares(app)
setupRoutes(app)

app.listen(3000, () => {
  console.log('Live on http://localhost:3000')
})
