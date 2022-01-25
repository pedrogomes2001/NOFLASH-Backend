import { Router } from "express";
import { Auth } from '../Controller/Auth';
import { json } from "body-parser";

const router = Router();
const Controller = new Auth();

router.post('/api/signup', json(), (request, response)=>{
    Controller.signup(request, response)
});

router.post('/api/signin',json(), (request, response)=>{
    Controller.signin(request, response)
});

export default router