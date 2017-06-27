export class DevelopmentEnviroment{
    env:string =  'test';
    db:string = 'postgres';
    dialect:string = 'postgres';
    username:string = 'postgres';
    password:string = 'postgres';
    host: 'localhost';
    serverPort: number = 3000;
    pgPort:number = 5432;
    dbURL:string = 'postgres://postgres:pgroot@localhost:5432/ts-api-test';
    secret:string = 'S3cr3t'
}

