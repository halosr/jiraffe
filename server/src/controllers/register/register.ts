import AppDataSrc from "@/config/db.conf";
import { User } from "@/models/user";
import { ApiError } from "@/utils/error";
import bcrypt from "bcrypt";
import { Request, Response } from "express";

const userRepo = AppDataSrc.getRepository(User);

export async function registerUser(req: Request, res: Response) {
    try {
        const { name, email, password, role, createdBy } = req.body;

        if (!name || !email || !password) {
            throw new ApiError(400, "Missing required body parameters", "Required fields missing in the request body");
        }

        const isUserExist = await userRepo.findOne({ where: { email } });
        if (isUserExist) {
            throw new ApiError(409, "User already exists", "This user is already registered on our database");
        }

        const saltRounds: number = Number(process.env.PASSWORD_SALT);
        const passwordHash = await bcrypt.hash(password, saltRounds);
        const newUser: User = userRepo.create({
            name,
            email,
            password: passwordHash,
            role: role || "ADMIN",
            createdBy: createdBy || "SUPER_USER",
        });
        const {password: _, ...responseData} = await userRepo.save(newUser);
        res.status(201).json({ status: "success", msg: "user registered successfully", data: responseData });
    } catch (error) {
        if (error instanceof ApiError) {
            return res.status(error.statusCode).json({ status: "failure", msg: error.message, data: error });
        }
        res.status(500).json({status: 'failure', msg: 'Internal Server Error', data: error})
    }
}
