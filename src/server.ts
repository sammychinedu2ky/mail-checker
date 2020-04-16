import App from './app';
import Logger from './middleware/logger';
import Notify from './controllers/notify';
import Send from './controllers/sendmail'

const app = new App({
    port: 3000,
    controllers:[
       new Notify(),
        new Send()
    ],
    middleWares: [
        new Logger()
    ]
})

app.listen();