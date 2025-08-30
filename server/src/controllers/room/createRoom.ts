import AppDataSrc from "@/config/db.conf";
import { Room } from "@/models/room";
import { Story } from "@/models/story";
import { ApiError } from "@/utils/error";
import { extractJwt } from "@/utils/token";
import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

const roomRepo = AppDataSrc.getRepository(Room);
const storyRepo = AppDataSrc.getRepository(Story);

export async function createRoom(req: Request, res: Response) {
    try {
        const {name} = req.body;

    if(!name) {
        throw new ApiError(400, "Missing mandatory fields", "Required request body parameters are missing");
    }
    const isRoomExist: Room | null = await roomRepo.findOne({where: {name}});
    if(isRoomExist) {
        throw new ApiError(409, "Room already exists", "The requested room is already created in db")
    }
    const authHeader = req.headers.authorization;
    const token = authHeader!.split(" ")[1];
    const tokenData = extractJwt(token) as JwtPayload;
    const createdBy = tokenData?.email;

    const newRoom: Room = roomRepo.create({name, status: 'TODO', createdBy})
    const responseData: Room = await roomRepo.save(newRoom);

    await storyRepo.update({id: name}, {roomId: responseData.id})

    res.status(201).json({status: 'success', msg: 'room created successfully', data: responseData})

    } catch (error) {
        if(error instanceof ApiError) {
            return res.status(error.statusCode).json({status: 'failure', msg: error.message, data: error})
        }
        res.status(500).json({status: 'failure', msg: 'Internal server error', data: error})
    }
}