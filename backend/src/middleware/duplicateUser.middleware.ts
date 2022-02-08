import {Request, Response} from 'express'
import User from '../models/user.model';

export default async (req: Request, res: Response, next: any): Promise<any> => {
  const email = req.body.email

  try {
    const user = await User.findOne({ email })

    if(user) throw new Error(`User with email ${email} already exists`)

    next();
  } catch (err: any) {
    res.status(400).json({
      message: err.message
    })
  }
}