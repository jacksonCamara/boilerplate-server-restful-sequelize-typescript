import { TesteEnviroment } from './test.env';
import { DevelopmentEnviroment } from './development.env';

export class Enviroment {

    public env: string;
    public db: string;
    public dialect: string;
    public username: string;
    public password: string;
    public host: string;
    public serverPort: number;
    public pgPort: number;
    public dbURL: string;
    public secret: string;

    constructor() {
        let env = this.verificaVariavelAmbiente();
        this.env = env.env;
        this.db = env.db;
        this.dialect = env.dialect;
        this.username = env.username;
        this.password = env.password;
        this.host = env.host;
        this.serverPort = env.serverPort;
        this.pgPort = env.pgPort;
        this.dbURL = env.dbURL;
        this.secret = env.secret;
    }

    private verificaVariavelAmbiente() {
        if (process.env.NODE_ENV == 'test') {
            return new TesteEnviroment();
        } else if (process.env.NODE_ENV == 'development') {
            return new DevelopmentEnviroment();
        }
    }
}