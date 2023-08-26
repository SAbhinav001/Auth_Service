const UserService = require("../services/user-service")

const userService = new UserService()

const create = async(req, res)=>{
    try{
        const response = await userService.create({
            email : req.body.email,
            password : req.body.password
        })
        return res.status(201).json({
            success:true,
            message:"successful created new user",
            data:response,
            err:{}
        })

    }catch(error){
        console.log(error);
        return res.status(error.statusCode).json({
                message: error.message,
                success : false,
                data:{},
                err: error.explanation,

        })
    }
}

const signIn = async(req, res)=>{
    try{
     
        const response = await userService.signIn(req.body.email, req.body.password)
        return res.status(201).json({
            success:true,
            message:"successful signIN ",
            data:response,
            err:{}
        })

      

    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
            data :{},
            err: error,
            success:false
        })
    }
}

const isAuthenticated = async(req, res)=>{
    try{
     const token = req.headers["x-access-token"]
     const response= await userService.isAuthenticated(token)
     return res.status(201).json({
        success:true,
        message:"user is authenticated  ",
        data:response,
        err:{}
    })
     
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
            data :{},
            err: error,
            success:false
        })
    }
}

const isAdmin = async(req, res)=>{
    try{
     const token = await userService.isAdmin(req.body.id)
     return res.status(201).json({
        success:true,
        message:"successfully fetche wheter user is admin or not  ",
        data:token,
        err:{}
    })
     
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
            data :{},
            err: error,
            success:false
        })
    }
}

module.exports = {
    create,
    signIn,
    isAuthenticated,
    isAdmin,
}