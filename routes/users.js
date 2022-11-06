import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users =  []


//the routes of this file are starting with /users
router.get('/', (req, res) => {

    console.log(users);
    
    res.send(users);

});

router.post('/', (req, res) => {

    const user = req.body;

    users.push({... user, id: uuidv4()});

    res.send(`New user sucessfull created! ${user.firstName} added!`);
});

router.get('/:id', (req,res) => {

    const { id } = req.params; 

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);

});

router.delete('/:id', (req,res) =>{

    const { id } = request.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User ${id} was sucefully deleted.`);

});

router.patch('/:id', (req,res) =>{

    const { id } = request.params;

    const {firstName, lastName, age} = req.body;

    users = users.filter((user) => user.id !== id);


    if(firstName) user.firstName = firstName;

    if(lastName) user.lastName = lastName;

    if(age) user.age = age;

    res.send(`The user with id ${user.id} was updated sucefully`);

});

export default router;