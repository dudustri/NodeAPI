import express from "express";
import bodyParser from "body-parser";
import userRoutes from './routes/users.js';
//const express = require('express');

const apiProject = express();
const port = 5000;

apiProject.use(bodyParser.json());

apiProject.use('/users', userRoutes);

apiProject.get('/', (req, res) => res.send('Look this amazing API Dude!'));

apiProject.listen(port, () => console.log(`Server running in port: http:localhost:${port}`));