import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import dotenv from 'dotenv';
dotenv.config();


import postRoutes from './routes/posts.js';
//import dotenv from 'dotenv';

const app = express();
//dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

// Configure cors to allow requests from http://localhost:3000
app.use(cors({ origin: '*' }));

app.use('/posts', postRoutes);
app.get('/', (req,res)=>{
  res.send("Hello to Memories API");
})
const CONNECTION_URL = process.env.MONGODB_URI;

const PORT = process.env.PORT || 5001;

mongoose.connect(CONNECTION_URL /*{ useNewUrlParser: true, useUnifiedTopology: true }*/)
  .then(() => app.listen(PORT, () => console.log(`Server running on : ${PORT}`)))
  .catch((error) => console.log(error.message));




//mongoose.set('useFindAndModify', false);