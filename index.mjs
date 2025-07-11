import express from 'express';
import morgan from 'morgan';
import 'dotenv/config'
import mongoose from 'mongoose';
import Task from './Modals/TaskModal';

const app = express()
const port = 4000



app.use(middleware);
app.use(morgan('tiny'));
app.use(express.json());

function middleware(req, res, next) {
  // console.log("middleware", Date.now())
  req.requestBy = "Me"
  // req.status{500}.send('Internal Server Error'); //iskey zariyee hum request lo beech me hi rok saktey hen
  next();
}


app.get('/', (req, res) => {
  console.log("req.requestBy",req.requestBy);
  res.status(200).send(Task)
})

app.use(express.json());
app.use(morgan('tiny'));

mongoose.connect(process.env.MongoDB_URL)
  .then(() => console.log('Mongo DB Connected!')).catch(err => console.log("MongoDB connection error:", err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})