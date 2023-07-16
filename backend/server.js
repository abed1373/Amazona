import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import data from './data.js'

import seedRouter from './routers/seedRoutes.js'
import productRouter from './routers/productRouter.js'

dotenv.config()


mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express() 

app.use('/api/seed',seedRouter)
app.use('/api/products',productRouter)





app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})


app.get('/', (req, res) => {
  res.send('Server is ready')
})

const port=process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`)
})
