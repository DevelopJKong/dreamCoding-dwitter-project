import express from "express";
import { home } from "../controllers/twitterController";

const globalRouter = express.Router();

globalRouter.get("/", home);

export default globalRouter;
