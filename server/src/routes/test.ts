import { Router } from "express";

const testRouter: Router = Router();

testRouter.get("/", (req, res) =>{
    res.json({msg: "jirrafe apis are up"})
})

export default testRouter