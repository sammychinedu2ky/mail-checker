import { Request, Response } from 'express'
import { Router } from 'express'
import { PrismaClient } from '@prisma/client'



const prisma = new PrismaClient()
export default class {
    public router = Router();

    constructor() {
        this.setRouter()
    }
    private setRouter() {
        this.router.get('/mailinfo/:userId', this.handle)
    }
    async handle(req: Request, res: Response) {
        let id = parseInt(req.params.userId)

        let mail = await prisma.maildata.create({
            data: {
                user: {
                    connect: {
                        id
                    }
                }

            }
        })
        var buf = new Buffer([
            60, 115, 118, 103, 32, 104, 101, 105, 103,
            104, 116, 61, 34, 48, 46, 49, 112, 120,
            34, 32, 119, 105, 100, 116, 104, 61, 34,
            48, 46, 49, 112, 120, 34, 62, 10, 60,
            47, 115, 118, 103, 62
        ]);

        res.set('Content-Type', 'image/png');
        res.end(buf, 'binary');

    }
}