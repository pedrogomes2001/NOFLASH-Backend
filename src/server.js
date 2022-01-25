import { dbInit } from './config/db.config';
import cors from 'cors';
import express from 'express';
import AuthRoute from './Routes/Auth'
import PostRoute from './Routes/Post'

const server = express();

server.use(cors());

dbInit()


server.use(AuthRoute);
server.use(PostRoute)

const PORT = process.env.PORT ?? 5000;

server.listen(PORT, ()=>{
    console.log(`Server started on PORT ${PORT}`)
})