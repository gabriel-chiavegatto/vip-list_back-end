import { db, ObjectId } from "../db.mongo.js";
import joi from "joi";


async function newNameOnSimpleList(req, res) {
    try {
        const newVipGuest = req.body;
        const schemaGuest = joi.object({
            name: joi.string().required(),
            event: joi.string().required(),
            date: joi.string().required(),
            phoneNumber: joi.string(),
            recommendation: joi.string()
        })
        const validation = schemaGuest.validate(newVipGuest);
        if(validation.error){
            return res.sendStatus(401)
        }
        await db.collection("listaTeste2").insertOne(newVipGuest);
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(422);
    }
}

async function showSimpleVipList(req, res) {
    try {
        const vipList = await db.collection("listaTeste2").find().toArray();
        res.status(200).send(vipList);
    } catch (error) {
        console.log(error);
        res.sendStatus(422);
    }
}

export { newNameOnSimpleList, showSimpleVipList }