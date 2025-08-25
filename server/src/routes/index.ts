import { Request, Response, Router } from "express";
import registerRouter from "@/routes/user/register";
import loginRouter from "@/routes/user/login";

const appRouter: Router = Router();

// testing the router
appRouter.get("/", (req: Request, res: Response) => {
    res.json({ msg: "jirrafe apis are up" });
});

appRouter.use(registerRouter);
appRouter.use(loginRouter)

export default appRouter;
