"use strict";
var DevelopmentEnviroment = (function () {
    function DevelopmentEnviroment() {
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
    return DevelopmentEnviroment;
}());
exports.DevelopmentEnviroment = DevelopmentEnviroment;
//# sourceMappingURL=development.env.js.map