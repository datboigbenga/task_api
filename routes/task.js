const express = require("express")
const Task = require("../models/task")
const router = express.Router()
const {getusers, postuser, getsingleuser, deleteuser, updateuser} = require("../controller/task")

router.post("/", postuser)
router.get("/", getusers)
router.get("/:id", getsingleuser)
router.delete("/:id", deleteuser)
router.patch("/:id", updateuser)

module.exports = router