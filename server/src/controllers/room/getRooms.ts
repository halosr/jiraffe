import AppDataSrc from "@/config/db.conf";
import { Room } from "@/models/room";
import { ApiError } from "@/utils/error";
import { Request, Response } from "express";

const roomRepo = AppDataSrc.getRepository(Room);

export async function getRooms(req: Request, res: Response) {
    try {
        const rooms: Room[] = await roomRepo.find();
        if (!rooms) {
            throw new ApiError(404, "Rooms not found", "Requested data is not available");
        }

        res.status(200).json({ status: "success", msg: "Rooms data fetched successfully", data: rooms });
    } catch (error) {
        if (error instanceof ApiError) {
            return res.status(error.statusCode).json({ status: "failure", msg: error.message, data: error });
        }
        res.status(500).json({ status: "failure", msg: "Internal server error", data: error });
    }
}
