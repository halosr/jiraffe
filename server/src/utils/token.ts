import jwt, { JwtPayload } from "jsonwebtoken";

export function generateJwt(payload: Record<string, any>): string {
    const tokenSecret = process.env.TOKEN_SIGN_SECRET;
    const tokenExpiresIn = Number(process.env.TOKEN_EXPIRE_DURATION!);

    const token = jwt.sign(payload, tokenSecret!, { expiresIn: tokenExpiresIn });

    return token;
}

export function extractJwt(token: string): JwtPayload | string {
    const tokenSecret = process.env.TOKEN_SIGN_SECRET;
    const decodedToken = jwt.verify(token, tokenSecret!);

    return decodedToken;
}

export function verifyJwt(token: string): boolean {
    const decodedToken = extractJwt(token);

    return !!decodedToken;
}
