import {createUserController} from "../Controller/userController.js";
import express from 'express'

const userRoute = express.Router(); //post get put delete

userRoute.post('/signup', createUserController);

export default userRoute