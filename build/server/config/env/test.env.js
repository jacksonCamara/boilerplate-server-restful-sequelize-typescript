"use strict";
var TesteEnviroment = (function () {
    function TesteEnviroment() {
        this.env = 'test';
        this.db = 'postgres';
        this.dialect = 'postgres';
        this.username = 'postgres';
        this.password = 'postgres';
        this.serverPort = 3000;
        this.pgPort = 5432;
        this.dbURL = 'postgres://postgres:pgroot@localhost:5432/ts-api-test';
        this.secret = 'S3cr3t';
    }
    return TesteEnviroment;
}());
exports.TesteEnviroment = TesteEnviroment;
//# sourceMappingURL=test.env.js.map