import userModel from "../Model/userModel.js"


// user create
export const createUserController = async (req,res) => {
    try {
        const{name,email,password}=req.body
        const response = await userModel.createUser(name, email, password);
        res.status(201).json({
            message: "user has been created",
            userId: response
        })
    }
    catch (err){
        res.status(500).json({message: "invalid data"})
    }
}

// get all the users

export const getAllUserController = async (req,res) =>{

    try{
        const data = await userModel.getAllUserModel();
        res.json(data)

       } catch (err){
        res.status(500).json({error: err.message})
       }
}

export const updateUserPasswordController = async (req , res) =>{
    try{
        const {password}=req.body;
        const updatepassword = await userModel.UpdateUserModel(req.params.id,{password});
        if(!updatepassword) {
            req.json({message: "user not found"})
        }
        else{
            res.json({
                message:"password has been updated"
            })
        }
    }catch(err){
        res.status(500).json({err: err.message})
    }
}

export const deleteUserController = async (req, res) =>{
    try{
        const deletePassword = await userModel.DeleteUserModel(req.params.id);
        if(!deletePassword) {
            req.json({message: "user not found"})
        }
        else{
            res.json({
                message:"user has been removed"
            })
        }
    }catch(err){
        res.status(500).json({err: err.message})
    
    }
}