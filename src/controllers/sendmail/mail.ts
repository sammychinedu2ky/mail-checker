"use strict";
const nodemailer = require("nodemailer");
import Template from './template'

async function main(userId: number,recepient:string) {


  return new Promise(async (resolve, reject) => {
    let transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS
      },
      tls: {
        rejectUnauthorized: false
      }
    });


    let info = await transporter.sendMail({
      from: process.env.sender,
      to: recepient,
      subject: "Transaction details",

      html: Template.text(userId.toString())
    });

    console.log("Message sent: %s", info.messageId);


    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error)
      } else {
        resolve('success')
        console.log("Server is ready to take our messages");
      }
    });
  })


}
export default main









