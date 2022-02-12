import {Request, Response} from 'express'
import User from '../models/user.model'

const list = async (req: Request, res: Response): Promise<any> => {
  try {
    const users = await User.find({}, '_id name email')

    res.status(200).json({
      message: 'Users fetched successfully',
      data: users
    })
  } catch (err: any) {
    res.status(400).json({
      message: err.message
    })
  }
}

export {
  list
}