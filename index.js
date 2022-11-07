import express from "express";
import bodyParser from "body-parser";
import userRoutes from './routes/users.js';
import standardRoutes from "./routes/standard.js";
import mongoose from "mongoose";
import {} from 'dotenv/config';
//const express = require('express');

const apiProject = express();
const port = 5000;


//Middleware to parse JSON body
apiProject.use(bodyParser.json());

apiProject.use('/users', userRoutes);

apiProject.get('/', standardRoutes);

apiProject.get('/', standardRoutes);

//Database Connection

mongoose.connect(

    process.env.DB_CONNECTION, 

    () => console.log('Connected to Database!')

);


//Server port listening
apiProject.listen(port, () => console.log(`Server running in port: http:localhost:${port}`));