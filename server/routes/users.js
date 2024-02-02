import express from 'express'
 
import { getUser, signin, signup } from '../controllers/user.js'

const router = express.Router()

router.get('/', getUser)
router.post('/signin', signin)
router.post('/signup', signup)

export default router