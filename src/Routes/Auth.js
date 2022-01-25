import { Router } from "express";
import { Auth } from '../Controller/Auth';
import { json } from "body-parser";

const router = Router();
const Controller = new Auth();



export default router