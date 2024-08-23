import express from 'express'
import user from "./users.mjs"
import Assignment from './assignments.mjs'
import assignmentSubmitRouter from './assignmentsubmit.mjs'
import studentuser from './studentuser.mjs'
const router = express.Router()

router.use('/users' , user)
router.use('/studentusers' , studentuser)
router.use('/assignments' , Assignment)
router.use('/assignmentsubmit', assignmentSubmitRouter);


export default router