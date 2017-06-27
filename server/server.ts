import * as http from 'http';
import Api from './api/api';
const models = require('./models');
import { Enviroment } from './config/env/enviroment'


export class Server {
    private server;
    private config: Enviroment;

    constructor() {
        this.config = new Enviroment();
        this.server = http.createServer(Api);
        this.inicializate();
    }

    inicializate() {
        models.sequelize.sync().then(() => {
            this.server.listen(this.config.serverPort);
            this.server.on('listening', () => console.log(`Servidor esta Rodando na porta ${this.config.serverPort}`));
            this.server.on('error', (error: NodeJS.ErrnoException) => console.log(`Ocorreu um erro: ${error}`));
        })
    }
}

const server = new Server();



//{force: "true"}