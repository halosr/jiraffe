import jwt from "jsonwebtoken";

export function generateToken(payload: Record<string, any>){
    const tokenSecret = process.env.TOKEN_SIGN_SECRET;
    const tokenExpiresIn= Number(process.env.TOKEN_EXPIRE_DURATION!);

    const token = jwt.sign(payload, tokenSecret!, {expiresIn: tokenExpiresIn})

    return token;
}