
import { v4 as uuidv4 } from 'uuid';


let users =  []

export const getAllUsers = (req, res) => {

    console.log(users);
    
    res.send(users);

}

export const createUser =  (req, res) => {

    const user = req.body;

    users.push({... user, id: uuidv4()});

    res.send(`New user sucessfull created! ${user.firstName} added!`);
}


export const getUserByID = (req,res) => {

    const { id } = req.params; 

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);

}

export const deleteUser = (req,res) =>{

    const { id } = request.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User ${id} was sucefully deleted.`);

}

export const updateUser = (req,res) =>{

    const { id } = request.params;

    const {firstName, lastName, age} = req.body;

    users = users.filter((user) => user.id !== id);


    if(firstName) user.firstName = firstName;

    if(lastName) user.lastName = lastName;

    if(age) user.age = age;

    res.send(`The user with id ${user.id} was updated sucefully`);

}

