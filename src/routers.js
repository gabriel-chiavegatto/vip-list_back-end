import { Router } from "express";
import { newNameOnSimpleList, showSimpleVipList } from "./controllers/SimpleList.js";
const routers = Router();

routers.get("/", (req,res)=>{res.status(200).send("HELLO WORLD")});
routers.post("/vip-list", newNameOnSimpleList);
routers.get("/vip-list", showSimpleVipList);

export { routers }