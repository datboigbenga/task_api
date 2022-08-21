const {CustomApiError} = require("../error/customerrors")
const errorHandlerMiddleware= (err, req, res, next)=>{
if(err instanceof CustomApiError){
    return res.status(err.statuscode).json({msg:err.message})
}
// return res.status(500).json({msg:err})
// console.log(err)
return res.status(500).json({msg:"internal error"})
// return res.status(500).json({msg:err.message})


}

module.exports = errorHandlerMiddleware