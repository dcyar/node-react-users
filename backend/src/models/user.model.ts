import { Schema, model, Document } from 'mongoose'

export interface UserInterface extends Document {
  name: string,
  email: string,
  password: string
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
  }, {
    timestamps: true
  }
)

export default model<UserInterface>('User', userSchema)
