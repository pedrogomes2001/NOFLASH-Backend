import { pool } from "../config/db.config";


export class Post{

    create(request, response){
        const { post } = request.body;
        const author = request.token._id;

        const query = `
            INSERT INTO Post (author, post) VALUES ($1, $2)
        `

        pool.query(query, [author, post]).then(()=>{
            return response.status(201).json({msg:'Post created'})
        }).catch(()=>{
            return response.status(500).json({msg:'Failed to create post'})
        })
    }


    async get(request, response){
        const query = `SELECT * FROM Post`;

        const posts = await (await pool.query(query)).rows;
        return response.status(200).json({posts})
    }


    async update(request, response){
        const author = request.token._id;
        const postid = request.params.id;
        const { post } = request.body;

        let query = `
            SELECT * FROM Post WHERE id=$1
        `

        const userpost = await (await pool.query(query, [postid])).rows[0];

        if (userpost.author !== author){
            return response.status(403).json({msg:'Failed to update'})
        }

        query = `
            UPDATE Post SET post=$1 WHERE id=$2
        `

        pool.query(query, [post, postid]).then(()=>{
            return response.status(200).json({msg:'Post updated'})
        }).catch(()=>{
            return response.status(500).json({msg:'Failed to update post'})
        })
    }

    delete(request, response){
        const postid = request.params.id;

        pool.query('DELETE FROM Post WHERE id=$1', [postid]).then(()=>{
            return response.status(200).json({msg:'Post deleted successfully'})
        }).catch(()=>{
            return response.status(500).json({msg:'Failed to delete post'})
        })
    }

    async comment(request, response){
        const author = request.token.email;
        const postid = request.params.id;
        const { comment } = request.body;

        if (!comment){
            return response.status(400).json({msg:'Comment field must not be empty'})
        }

        const post = await (await pool.query('SELECT * FROM Post WHERE id=$1', [postid])).rows[0];

        if (post.comments === null){
            const newcomment = [
                {
                    author,
                    comment
                }
            ]

            pool.query('UPDATE Post SET comments=$1 WHERE id=$2', [JSON.stringify(newcomment), postid]).then(()=>{
                return response.status(200).json({msg:'Comment made'})
            }).catch(()=>{
                return response.status(500).json({msg:'Failed to comment'})
            })
        }else{
            const saved = post.comments
            const updated = JSON.stringify([{comment, author}, ...saved]);

            pool.query('UPDATE Post SET comments=$1 WHERE id=$2', [updated, postid]).then(()=>{
                return response.status(200).json({msg:'Comment made'})
            }).catch((error)=>{
                console.log(error)
                return response.status(500).json({msg:'Failed to comment', error})
            })
        }
    }

    async getSpecificPost(request, response){
        const postid = request.params.id;

        const query = `SELECT Post.id, Post.post, Post.author, Post.comments, Account.email FROM Post JOIN Account on Account.id = Post.author WHERE Post.id = $1`

        const post = await (await pool.query(query, [postid])).rows[0];
        
        return response.status(200).json({post})
    }
}

