import express from 'express';
import routes from './routes'; 
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from "mongoose";


dotenv.config();


const app = express();
app.use(express.json());

app.use(cors());
app.use(routes);



mongoose.connect(`${process.env.MONGO_URI}`);

const db = mongoose.connection;
db.once("open", () => console.log("Connected to Mongo DB!!"));
db.on("error", (error) => console.error(error));

app.listen(3333);