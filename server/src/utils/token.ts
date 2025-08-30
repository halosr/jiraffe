import jwt, { JsonWebTokenError, JwtPayload, TokenExpiredError } from "jsonwebtoken";
import { ApiError } from "./error";

export function generateJwt(payload: Record<string, any>): string {
    const tokenSecret = process.env.TOKEN_SIGN_SECRET;
    const tokenExpiresIn = Number(process.env.TOKEN_EXPIRE_DURATION!);

    const token = jwt.sign(payload, tokenSecret!, { expiresIn: tokenExpiresIn });

    return token;
}

export function extractJwt(token: string): JwtPayload | string {
    const tokenSecret = process.env.TOKEN_SIGN_SECRET;
    const decodedToken = jwt.verify(token, tokenSecret!);
    console.log("logging dt", decodedToken);

    return decodedToken;
}

export function verifyJwt(token: string): boolean {
    try {
        const decodedToken = extractJwt(token);
        return !!decodedToken;
    } catch (error) {
        if (error instanceof TokenExpiredError) {
            throw new ApiError(401, "Expired session token", "The session token is expired");
        } else if (error instanceof JsonWebTokenError) {
            throw new ApiError(401, "Invalid session token", "The session token is invalid");
        } else {
            throw error;
        }
    }
}
