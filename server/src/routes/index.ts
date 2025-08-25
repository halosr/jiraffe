import storyRouter from "@/routes/story/story";
import loginRouter from "@/routes/user/login";
import registerRouter from "@/routes/user/register";
import { Request, Response, Router } from "express";

const appRouter: Router = Router();

// testing the router
appRouter.get("/", (req: Request, res: Response) => {
    res.json({ msg: "jirrafe apis are up" });
});

appRouter.use(registerRouter);
appRouter.use(loginRouter);
appRouter.use(storyRouter);

export default appRouter;
