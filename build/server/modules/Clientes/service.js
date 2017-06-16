"use strict";
var interface_1 = require("./interface");
var model = require('../../models');
var Clientes = (function () {
    function Clientes() {
    }
    Clientes.prototype.create = function (cliente) {
        return model.Clientes.create(cliente);
    };
    Clientes.prototype.getAll = function () {
        console.log('getall');
        return model.Clientes.findAll({
            order: ['nome']
        })
            .then(interface_1.createClientes);
    };
    Clientes.prototype.getById = function (id) {
        return model.Clientes.findOne({
            where: { id: id }
        })
            .then(interface_1.createClienteById);
    };
    Clientes.prototype.getByEmail = function (email) {
        return model.Clientes.findOne({
            where: { email: email }
        })
            .then(interface_1.createClienteByEmail);
    };
    Clientes.prototype.update = function (id, user) {
        return model.Clientes.update(user, {
            where: { id: id },
            fields: ['nome', 'email', 'password'] //os dados que podem ser alterados
        });
    };
    Clientes.prototype.delete = function (id) {
        console.log('aqui no service');
        return model.Clientes.destroy({
            where: { id: id }
        });
    };
    return Clientes;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Clientes;
//# sourceMappingURL=service.js.map