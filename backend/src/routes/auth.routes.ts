import express from 'express'
import { register } from '../controllers/auth.controller'
import duplicateUserMiddleware from '../middleware/duplicateUser.middleware'

const router = express.Router()

router.post('/register', duplicateUserMiddleware, register)

export default router