"use strict";
const nodemailer = require("nodemailer");
import Template from './template'

async function main(userId: number) {


  return new Promise(async (resolve, reject) => {
    let transporter = nodemailer.createTransport({
      host: "167.99.153.106",
      port: 587,
      secure: false,
      auth: {
        user: 'ecoinofficial',
        pass: 'jeanso01!'
      },
      tls: {
        rejectUnauthorized: false
      }
    });


    let info = await transporter.sendMail({
      from: '"EcoinOfficial" <noreply@ecoinofficial.org>',
      to: "sammychinedu2ky@gmail.com, samson2ky@yahoo.com",
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









