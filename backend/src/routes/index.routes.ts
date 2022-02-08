import express from 'express'
import userRouter from './user.routes'
import authRouter from './auth.routes'

const routes = express.Router()

routes.use('/', authRouter)
routes.use('/users', userRouter)

export default routes