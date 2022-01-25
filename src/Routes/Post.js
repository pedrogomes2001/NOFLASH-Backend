import { json } from "body-parser";
import { Router } from "express";
import { Post } from '../Controller/Post';
import { Authenticate } from '../Middleware/Authenticate'

const router = Router();
const Controller = new Post();


router.post('/api/post', json(), Authenticate, (request, response) => {
    Controller.create(request, response)
});

router.get('/api/post', (request, response) => {
    Controller.get(request, response)
})

router.patch('/api/post/:id', json(), Authenticate, (request, response) => {
    Controller.update(request, response)
})



export default router