"use strict";
var http = require("http");
var api_1 = require("./api/api");
var models = require('./models');
var enviroment_1 = require("./config/env/enviroment");
var Server = (function () {
    function Server() {
        this.config = new enviroment_1.Enviroment();
        this.server = http.createServer(api_1.default);
        this.inicializate();
    }
    Server.prototype.inicializate = function () {
        var _this = this;
        models.sequelize.sync().then(function () {
            _this.server.listen(_this.config.serverPort);
            _this.server.on('listening', function () { return console.log("Servidor esta Rodando na porta " + _this.config.serverPort); });
            _this.server.on('error', function (error) { return console.log("Ocorreu um erro: " + error); });
        });
    };
    return Server;
}());
exports.Server = Server;
var server = new Server();
//{force: "true"} 
//# sourceMappingURL=server.js.map