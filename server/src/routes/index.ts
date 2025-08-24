import { Request, Response, Router } from "express";
import registerRouter from "@/routes/user/register";

const appRouter: Router = Router();

// testing the router
appRouter.get("/", (req: Request, res: Response) => {
    res.json({ msg: "jirrafe apis are up" });
});

appRouter.use(registerRouter);

export default appRouter;
