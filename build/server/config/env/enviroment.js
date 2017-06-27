"use strict";
var test_env_1 = require("./test.env");
var development_env_1 = require("./development.env");
var Enviroment = (function () {
    function Enviroment() {
        var env = this.verificaVariavelAmbiente();
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
    Enviroment.prototype.verificaVariavelAmbiente = function () {
        if (process.env.NODE_ENV == 'test') {
            return new test_env_1.TesteEnviroment();
        }
        else if (process.env.NODE_ENV == 'development') {
            return new development_env_1.DevelopmentEnviroment();
        }
    };
    return Enviroment;
}());
exports.Enviroment = Enviroment;
//# sourceMappingURL=enviroment.js.map