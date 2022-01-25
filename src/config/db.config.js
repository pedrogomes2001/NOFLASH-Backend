import { Pool } from 'pg';
import { config } from 'dotenv';
config();

export const pool = new Pool({
    connectionString: process.env.DB
})

export const dbInit = ()=>{
    let query = `
        CREATE TABLE IF NOT EXISTS Account(
            id SERIAL PRIMARY KEY,
            email VARCHAR(150) NOT NULL UNIQUE,
            password VARCHAR(150) NOT NULL
        )
    `
    pool.query(query).then(()=>{
        console.log('Account table created')

        query = `
            CREATE TABLE IF NOT EXISTS Post(
                id SERIAL PRIMARY KEY,
                author INTEGER REFERENCES Account(id),
                post VARCHAR(250) NOT NULL,
                comments JSON
            )
        `
        pool.query(query).then(()=>{
            console.log('Post table created')
        })

    }).catch(()=>{
        console.log('Failed to create Account table')
    })
}