const validateUserAuth=(req, res, next)=>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json({
            message:"Please enter email and password",
        data:{},
        err:"email or pwd is missing"
        })
    }
    next()
}

const validateIsUserAdmin=(req, res, next)=>{
    if(!req.body.id ){
        return res.status(400).json({
            message:"userId not given",
        data:{},
        err:"email or pwd is missing"
        })
    }
    next()
}

module.exports ={
    validateUserAuth,
    validateIsUserAdmin
}