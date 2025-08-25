import { ApiError } from "@/utils/error";
import { Request, Response } from "express";
import AppDataSrc from "@/config/db.conf";
import { Story } from "@/models/story";
import { extractJwt } from "@/utils/token";
import { JwtPayload } from "jsonwebtoken";

const storyRepo = AppDataSrc.getRepository(Story);

export async function createStory(req: Request, res: Response) {
    try {
        const { id, title, description } = req.body;
        if (!id || !title || !description) {
            throw new ApiError(400, "Missing mandatory fields", "Required request body parameters are missing");
        }
        const isStoryExists: Story | null = await storyRepo.findOne({ where: { id } });
        if (isStoryExists) {
            throw new ApiError(409, "Story already exists", "The requested user story has been entered in db");
        }

        const authHeader = req.headers.authorization;
        const token = authHeader!.split(" ")[1];
        const tokenData = extractJwt(token) as JwtPayload;
        const createdBy = tokenData?.email;

        const userStory: Story = storyRepo.create({ id, title, description, status: "TODO", createdBy });
        const responseData = await storyRepo.save(userStory);

        res.status(201).json({ status: "success", msg: "User story created successfully", data: responseData });
    } catch (err) {
        console.log("Error occured", err);
        const error = err as ApiError;
        res.status(error.statusCode).json({ status: "failure", msg: error.message, data: error });
    }
}
