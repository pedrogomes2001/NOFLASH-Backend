import { verify } from "jsonwebtoken";

export const Authenticate = (request, response, next) => {
    const token = request.headers['x-auth-token'];

    try {
        const validatedToken = verify(token, process.env.cookie_secret)
        request.token = validatedToken;
        next()
    } catch (error) {
        return response.status(403).json({ error: 'Sign in or create account to continue' })
    }
}