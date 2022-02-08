import express from 'express'
import cors from 'cors'
import connectDB from './config/db'
import routes from './routes/index.routes'
require('dotenv').config()

connectDB()

const app = express()

app.use(cors())
app.use(express.json())

// API Routes
app.use('/api', routes)

// 404
app.use('*', (req, res) => {
  res.status(404).json({
    message: 'Not found'
  })
})

const port: (string|number) = process.env.PORT || 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))