import { db, ObjectId } from "../db.mongo.js";


async function newNameOnSimpleList(req, res) {
    try {
        const newVip = req.body;
        await db.collection("simple-list").insertOne(newVip);
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(422);
    }
}

async function showSimpleVipList(req, res) {
    try {
        const vipList = await db.collection("simple-list").find().toArray();
        res.status(200).send(vipList);
    } catch (error) {
        console.log(error);
        res.sendStatus(422);
    }
}

export { newNameOnSimpleList, showSimpleVipList }