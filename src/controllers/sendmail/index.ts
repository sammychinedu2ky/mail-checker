import {Request, Response} from 'express'
import {Router} from 'express'
import {PrismaClient} from '@prisma/client'
import Mail from './mail'


const prisma = new PrismaClient()
export default class {
    public router = Router();

    constructor(){
        this.setRouter()
    }
   private setRouter(){
        this.router.get('/sendmail/:userId',this.handle)
    }
   async handle(req:Request,res:Response){
   let userId = req.params.userId
   
   let user = await prisma.user.findOne({where:{
       id:parseInt(userId)
   }})
   
      await Mail(parseInt(userId),user.email)  
       res.json({message:'sent'})
    }
}