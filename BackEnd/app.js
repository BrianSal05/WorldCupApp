import express from "express";
import { connectDB } from "./dbMongoose.js";
import cors from "cors";
// const express = require('express')

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

import gameRoutes from "./controllers/gameController.js"
app.use('/games', gameRoutes)

import predictionRoutes from "./controllers/predictionController.js"
app.use('/predictions', predictionRoutes)

import teamRoutes from "./controllers/teamController.js"
app.use('/teams', teamRoutes)

import userRoutes from "./controllers/userController.js"
app.use('/users', userRoutes)

import groupRoutes from "./controllers/groupController.js"
app.use('/groups', groupRoutes)

export default app;