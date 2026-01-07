import {Router} from 'express'
import {Signup,login,Logout} from '../controller/user.controller.js'
const router=Router()


router.post('/signup',Signup)
router.post('/login',login)
router.post('/logout',Logout)


export default router;