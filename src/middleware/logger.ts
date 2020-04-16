import {Request, Response} from 'express'
import { runInNewContext } from 'vm'
interface log {
    log: (req:Request,res:Response,next:any)=>void
}
export default class Logger implements log {
    log= function(req:Request,res:Response,next:any):void{
        console.log(`Request logged: `, req.ip)
        next()
    }
}
    
