import storyRouter from "@/routes/story/story";
import loginRouter from "@/routes/user/login";
import registerRouter from "@/routes/user/register";
import { Request, Response, Router } from "express";
import roomRouter from "./room/room";

const appRouter: Router = Router();

// testing the router
appRouter.get("/", (req: Request, res: Response) => {
    res.status(200).json({ status: "success", msg: "jirrafe apis are up 😊" });
});

appRouter.use(registerRouter);
appRouter.use(loginRouter);
appRouter.use(storyRouter);
appRouter.use(roomRouter);

export default appRouter;
