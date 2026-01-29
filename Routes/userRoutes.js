import {createUserController, deleteUserController, getAllUserController, updateUserPasswordController} from "../Controller/userController.js";
import express from 'express'

const userRoute = express.Router(); //post get put delete

userRoute.post('/signup', createUserController);

userRoute.get('/getuser',getAllUserController);

userRoute.put('/updatepass/:id',updateUserPasswordController);

userRoute.delete('/deleteuser/:id', deleteUserController);

export default userRoute