import { login } from "@/controllers/login/login";
import { Router } from "express";

const loginRouter: Router = Router();

loginRouter.post('/login', login);

export default loginRouter;