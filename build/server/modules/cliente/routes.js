"use strict";
var controller_1 = require("./controller");
var ClienteRoutes = (function () {
    function ClienteRoutes() {
        this.clienteController = new controller_1.ClienteController();
    }
    ClienteRoutes.prototype.create = function (req, res) {
        return this.clienteController.createCliente(req, res);
    };
    ClienteRoutes.prototype.index = function (req, res) {
        return this.clienteController.getAll(req, res);
    };
    ClienteRoutes.prototype.findOne = function (req, res) {
        return this.clienteController.getById(req, res);
    };
    ClienteRoutes.prototype.update = function (req, res) {
        return this.clienteController.updateCliente(req, res);
    };
    ClienteRoutes.prototype.destroy = function (req, res) {
        return this.clienteController.deleteCliente(req, res);
    };
    return ClienteRoutes;
}());
exports.ClienteRoutes = ClienteRoutes;
//# sourceMappingURL=routes.js.map