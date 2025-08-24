import { Request, Response } from "express";

export async function registerUser(req: Request, res: Response) {
    try {
        const { name, email, password, role, createdBy } = req?.body;
        if (!name || !email || !password) {
            return res.status(400).json({ status: "failure", msg: "missing required parameters" });
        }
        console.log(name, email, password, role, createdBy);
        res.status(200).json({ status: "success", msg: "data received successfully" });
    } catch (error) {
        console.log("Error occured!!");
    }
}
