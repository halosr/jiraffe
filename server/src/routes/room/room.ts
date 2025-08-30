import { createRoom } from "@/controllers/room/createRoom";
import { getRooms } from "@/controllers/room/getRooms";
import { verifyToken } from "@/middleware/verifyToken";
import { Router } from "express";

const roomRouter: Router = Router();

roomRouter.post("/room", verifyToken, createRoom);
roomRouter.get("/rooms", verifyToken, getRooms);

export default roomRouter;
