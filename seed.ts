
import {PrismaClient} from '@prisma/client'



const prisma = new PrismaClient()
async function load(){
let user = await prisma.user.create({
    data:{
        email:"samson2ky@yahoo.com",
        name: "Samson Amaugo"
    }
})
console.log(user)
}
load()