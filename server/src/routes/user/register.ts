import { registerUser } from "@/controllers/register/register";
import { Router } from "express";

const registerRouter: Router = Router();

registerRouter.post("/register", registerUser);

export default registerRouter;
