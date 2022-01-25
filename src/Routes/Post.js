import { json } from "body-parser";
import { Router } from "express";
import { Post } from '../Controller/Post';
import { Authenticate } from '../Middleware/Authenticate'

const router = Router();
const Controller = new Post();


router.post('/api/post',json(),Authenticate, (request, response)=>{
    Controller.create(request, response)
});

router.get('/api/post', (request, response)=>{
    Controller.get(request, response)
})

router.patch('/api/post/:id',json(), Authenticate, (request, response)=>{
    Controller.update(request, response)
})

router.delete('/api/post/:id', Authenticate, (request, response)=>{
    Controller.delete(request, response)
})

router.post('/api/comment/:id',json(), Authenticate, (request, response)=>{
    Controller.comment(request, response)
})

router.get('/api/post/:id', (request, response)=>{
    Controller.getSpecificPost(request, response)
})

export default router