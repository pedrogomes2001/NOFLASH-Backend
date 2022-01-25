import { genSalt, hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { pool } from '../config/db.config'

export class Auth {

    async signup(request, response) {
        const { email, password } = request.body;

        if (!email || !password) {
            return response.status(400).json({ msg: 'All fields are required' })
        }

        const salt = await genSalt(18);
        const hashedPassword = await hash(password, salt);

        let query = `
            INSERT INTO Account (email, password) VALUES ($1, $2)
        `;

        pool.query(query, [email, hashedPassword]).then(() => {
            return response.status(200).json({ msg: 'Account created' })
        }).catch(() => {
            return response.status(500).json({ msg: 'Failed to create account' })
        })
    }

    async signin(request, response) {
        const { email, password } = request.body;

        if (!email || !password) {
            return response.status(400).json({ msg: 'All fields are required' })
        }

        let query = `SELECT * FROM Account WHERE email=$1`
        const user = await (await pool.query(query, [email])).rows[0]

        if (!user) {
            return response.status(404).json({ msg: 'Account with this email does not exist' })
        }

        const isPasswordValid = await compare(password, user.password);

        if (!isPasswordValid) {
            return response.status(400).json({ msg: 'Invalid password' })
        }

        const token_payload = {
            _id: user.id,
            email: user.email
        }
        const token = sign(token_payload, process.env.cookie_secret, { expiresIn: '365d' });
        return response.status(200).json({ token, token_payload })

    }
}