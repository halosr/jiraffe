import { ApiError } from "@/utils/error";
import { verifyJwt } from "@/utils/token";
import { NextFunction, Request, Response } from "express";

export function verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
        const authToken = req.headers.authorization;

        if (!authToken) {
            throw new ApiError(401, "Missing session token", "The required authentication headers are missing");
        }

        const token = authToken?.split(" ")[1];
        const isVerified = verifyJwt(token);
        if(!isVerified){
            throw new ApiError(401, "Invalid session token", "The session token is invalid or expired")
        }
        
        next();
    } catch (err) {
        console.error("Error occured", err);
        const error = err as ApiError;
        res.status(error.statusCode).json({ status: "failure", msg: error.message, data: error });
    }
}
