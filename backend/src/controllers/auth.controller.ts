import {Request, Response} from 'express'
import User from '../models/user.model'

const register = async (req: Request, res: Response): Promise<any> => {
  const { name, email, password } = req.body
  
  try {
    const user = await User.create({ name, email, password })

    if(!user) throw new Error('User not created. Try again!')

    res.status(200).json({
      message: 'User registered successfully',
      data: user
    })
  } catch (err: any) {
    res.status(400).json({
      message: err.message
    })
  }
}

export {
  register
}