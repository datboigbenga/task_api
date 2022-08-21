const Task = require("../models/task")
const asyncWrapper = require("../middleware/async")
const {customError} = require("../error/customerrors")

const postuser = asyncWrapper(async(req,res)=>{
    // try {
        const task = await Task.create(req.body)
        // next(customError("No Content matched your search!", "404"))
     return res.status(201).json({task: task})
     
    // } catch (error) {
    //     return res.status(500).send(error.message)
    // }
})


const getusers = asyncWrapper(async(req, res)=>{
    // try {
        const task = await Task.find({})
        // next(customError("No Content matched your search!", "404"))
        res.status(201).json({task:task})
    // } catch (error) {
    //     res.status(201).json({message: error})
    // }
})

    


const getsingleuser =asyncWrapper(async(req, res, next)=>{
    // try {
        const {id :taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task){
            return next(customError(`no task with id: ${taskID}`, 404))
            // const error  = new Error("Not found")
            // error.status = 404
            // error.hh = "swaguu"
            // return next(error)
            // return res.status(404).json({msg:`no task with id: ${taskID}`})
        }
        res.status(201).json({task:task})
    // } catch (error) {
    //     res.status(500).json({message: error})
    // }
})


const deleteuser = asyncWrapper(async(req,res, next)=>{
    // try {
        const {id : taskID} = req.params
        const task = await Task.findOneAndDelete({_id  :taskID})
        if(!task){
            return next(customError(`no task with id: ${taskID}`, 404))
        }
        res.status(200).json({task})

        // res.status(200).json({msg:`successfully deleted task with id: ${taskID}`})
    // } catch (error) {
    //     res.status(500).json({msg:`unable to delete`})
        
    // }
})


const updateuser = asyncWrapper(async(req,res, next)=>{
    console.log(req.body)
    // try {
        const {id: taskID} = req.params
        const body = req.body
        const task = await Task.findOneAndUpdate({_id: taskID}, body, {new:true, runValidators:true})
        if(!task){
            return next(customError(`no task with id: ${taskID}`, 404))
        }
        res.status(200).json({task})
    // } catch (error) {
    //     res.status(500).json({msg:error})
    // }
})

module.exports = {getusers, postuser, getsingleuser, deleteuser, updateuser}