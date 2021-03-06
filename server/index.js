import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

const CONNECTION_URL = 'mongodb://localhost:27017/memories'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL)
  .then(() => console.log('mongodb is running'))
  .catch(err => console.log(err.message))

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`))
