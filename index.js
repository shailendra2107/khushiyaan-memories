import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import posts from './routes/posts.js'

const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", posts)
// set database

const port = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECDTION_URL, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`Server Listening on ${port}`)))
    .catch((error) => console.log(error.message))

mongoose.set("useFindAndModify", false)