import express from 'express';
import cors from 'cors';
import { routers } from './routers.js';

import dotenv from "dotenv"; dotenv.config();

const server = express();

server.use(express.json());
server.use(cors());
server.use(routers);

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=>{console.log(`Server run in ${PORT}`)});