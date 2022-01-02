import express from "express";
import "express-async-errors"
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import tweetsRoute from "../router/tweets";
const PORT = 4020;

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/tweets',tweetsRoute);
app.use((req,res,next) => {
    res.sendStatus(404);
})

app.use((error,req,res,next) => {
    console.log(error);
    res.sendStatus(500);
})

app.listen(PORT);