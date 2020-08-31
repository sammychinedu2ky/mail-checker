import express from 'express';
import { Application } from 'express';

export default class {
    public app: Application
    public port: number

    constructor(init: { port: number; middleWares: any; controllers: any }) {
        this.app = express()
        this.port = init.port
        this.setProxy()
        this.middlewares(init.middleWares)
        this.routes(init.controllers)
        this.assests()

    }
    private routes(controllers: { forEach: (arg: (controller: any) => void) => void }) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router)
        })
    }
    private middlewares(middlewares: { forEach: (arg: (middleWare: any) => void) => void }) {
        middlewares.forEach(middleWare => {
            this.app.use(middleWare.log)
        })
    }
    private assests() {
        this.app.use(express.static('public'))
    }
    private setProxy() {
        this.app.set('trust proxy', true);
    }
    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })
    }
}