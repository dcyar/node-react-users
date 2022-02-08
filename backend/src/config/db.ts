import mongoose from 'mongoose'

export default async (): Promise<void> => {
  mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/test')

  mongoose.connection.on('connected', (): void => console.log('connected to mongodb'))
  mongoose.connection.on('error', (err: any): void => console.log(err))
}