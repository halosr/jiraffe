import AppDataSrc from "@/config/db.conf";
import { User } from "@/models/user";
import { ApiError } from "@/utils/error";
import { generateToken } from "@/utils/token";
import bcrypt from "bcrypt";
import { Request, Response } from "express";

const userRepo = AppDataSrc.getRepository(User);

export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new ApiError(
                400,
                "Missing Required body parameters",
                "Required fields are missing in the request body"
            );
        }

        const user: User | null = await userRepo.findOne({
            where: {
                email,
            },
        });
        if (!user) {
            throw new ApiError(401, "Invalid credentials", "You have entered invalid email or password");
        }

        const matchPassword: boolean = await bcrypt.compare(password, user.password);
        if (!matchPassword) {
            throw new ApiError(401, "Invalid credentials", "You have entered invalid email or password");
        }

        const { password: _, ...userData } = user;

        const authToken = generateToken(userData);
        const responseData = { ...userData, token: authToken };

        res.status(200).json({ status: "success", msg: "User logged in successfully", data: responseData });
    } catch (err) {
        console.error("Error occured", err);
        const error = err as ApiError;
        res.status(error.statusCode).json({ status: "failure", msg: error.message, data: error });
    }
}
