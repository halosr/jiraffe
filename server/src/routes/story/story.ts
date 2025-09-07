import { createStory } from "@/controllers/story/createStory";
import { getStories } from "@/controllers/story/getStories";
import { verifyToken } from "@/middleware/verifyToken";
import { Router } from "express";

const storyRouter: Router = Router();

storyRouter.post("/stories", verifyToken, createStory);
storyRouter.get('/stories', verifyToken, getStories)

export default storyRouter;
