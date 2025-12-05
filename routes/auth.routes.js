import { Router } from 'express';

const authRouter = Router();

authRouter.get('/sign-up',((req,res)=> res.send({title: 'sign up'})))
authRouter.get('/sign-in',((req,res)=> res.send({title: 'sign in'})))

export default authRouter;