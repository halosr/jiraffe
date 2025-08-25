import { createStory } from "@/controllers/story/createStory";
import { verifyToken } from "@/middleware/verifyToken";
import { Router } from "express";

const storyRouter: Router = Router();

storyRouter.post("/story", verifyToken, createStory);

export default storyRouter;
