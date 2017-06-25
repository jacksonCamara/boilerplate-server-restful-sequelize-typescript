"use strict";
var interface_1 = require("./interface");
var model = require('../../models');
var ClienteService = (function () {
    function ClienteService() {
        this.clienteInterface = new interface_1.ClienteInterface();
        /*
    
        getByEmail(email: string): Bluebird<IClienteDetail> {
            return model.clientes.findOne({
                where: { email }
            })
                .then(createClienteByEmail);
        }
    
        update(id: number, user: any) {
            return model.clientes.update(user, {
                where: { id },
                fields: ['nome', 'email', 'password'], //os dados que podem ser alterados
                hooks: true,
                individualHooks: true
            })
        }
    
        delete(id: number) {
            console.log('aqui no service')
            return model.clientes.destroy({
                where: { id }
            });
        }
        */
    }
    ClienteService.prototype.create = function (cliente) {
        console.log("=========================== imprimindo o model no service=================================");
        //console.log(model);
        return model.clientes.create({
            nome: cliente.nome,
            cpf: cliente.cpf,
            sexo: cliente.sexo,
            email: cliente.email,
            password: cliente.password,
            telefones: cliente.telefones,
            enderecos: cliente.enderecos,
        }, {
            include: [{ model: model.telefones }, { model: model.enderecos }]
        });
    };
    ClienteService.prototype.getAll = function () {
        var _this = this;
        return model.clientes.findAll({
            include: [{ model: model.telefones }, { model: model.enderecos }],
            order: ['nome']
        })
            .then(function (data) {
            return _this.clienteInterface.createClientes(data);
        });
    };
    ClienteService.prototype.getById = function (id) {
        var _this = this;
        return model.clientes.findOne({
            where: { id: id },
            include: [{ model: model.telefones }, { model: model.enderecos }]
        })
            .then(function (data) {
            return _this.clienteInterface.createCliente(data);
        });
    };
    return ClienteService;
}());
exports.ClienteService = ClienteService;
//# sourceMappingURL=service.js.map