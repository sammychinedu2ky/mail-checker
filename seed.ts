
import {PrismaClient} from '@prisma/client'



const prisma = new PrismaClient()
async function load(){
let user = await prisma.user.create({
    data:{
        email:process.env.MAIL,
        name: process.env.NAME
    }
})
console.log(user)
}
load()