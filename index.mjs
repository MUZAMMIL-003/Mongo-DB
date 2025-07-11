import express from 'express';
import morgan from 'morgan';
import 'dotenv/config'
import mongoose from 'mongoose';

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json());
app.use(morgan('tiny'));

mongoose.connect(process.env.MongoDB_URL)
  .then(() => console.log('Mongo DB Connected!')).catch(err => console.log("MongoDB connection error:", err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})