import { verify } from "jsonwebtoken";

export const Authenticate = (request, response, next) => {
    const token = request.headers['x-auth-token'];


}