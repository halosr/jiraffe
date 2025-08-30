import AppDataSrc from "@/config/db.conf";
import { Story } from "@/models/story";
import { ApiError } from "@/utils/error";
import { Request, Response } from "express";

const storyRepo = AppDataSrc.getRepository(Story);

export async function getStories(req: Request, res: Response) {
    try {
        const stories: Story[] = await storyRepo.find();
        if(!stories){
            throw new ApiError(404, "No Stories Available", "No Stories created for this project.")
        }

        res.status(200).json({status: 'success', msg: "stories fetched successfully", data: stories})

    } catch (error) {
        if (error instanceof ApiError) {
            res.status(error.statusCode).json({ status: "failure", msg: error.message, data: error });
        }
        res.status(500).json({status: 'failure', msg: 'Internal Server Error', data: error})
    }
}
