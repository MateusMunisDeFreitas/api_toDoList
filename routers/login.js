import { Router } from "express";
import jwt from 'jsonwebtoken';

const router = Router();

router.get("/login", (req, res)=>{
    res.send("Page login");
});

router.post("/login", (req, res)=>{
    const { nome_user } = req.params;
    const token = jwt.sign({user: nome_user}, process.env.SECRECT_KEY, {expiresIn: "1h"});

});

export default router;