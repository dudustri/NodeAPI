import express from "express";
import bodyParser from "body-parser";
//const express = require('express');

const apiProject = express();
const port = 5000;

apiProject.use(bodyParser.json());


apiProject.listen(port, () => console.log(`Server running in port: http:localhost:${PORT}`));