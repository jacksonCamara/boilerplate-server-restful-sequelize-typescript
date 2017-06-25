"use strict";
var ClienteInterface = (function () {
    function ClienteInterface() {
    }
    ClienteInterface.prototype.createCliente = function (_a) {
        var _this = this;
        var id = _a.id, nome = _a.nome, cpf = _a.cpf, sexo = _a.sexo, email = _a.email, password = _a.password, telefones = _a.telefones, enderecos = _a.enderecos;
        telefones = telefones.map(function (t) { return _this.createTelefone(t); });
        enderecos = enderecos.map(function (e) { return _this.createEndereco(e); });
        return {
            id: id, nome: nome, cpf: cpf, sexo: sexo, email: email, password: password, telefones: telefones, enderecos: enderecos
        };
    };
    ClienteInterface.prototype.createClientes = function (data) {
        var _this = this;
        return data.map(function (d) {
            return _this.createCliente(d);
        });
    };
    ClienteInterface.prototype.createTelefone = function (_a) {
        var numero = _a.numero;
        return { numero: numero };
    };
    ClienteInterface.prototype.createEndereco = function (_a) {
        var rua = _a.rua, numeroResidencia = _a.numeroResidencia, bairro = _a.bairro, cidade = _a.cidade, estado = _a.estado;
        return { rua: rua, numeroResidencia: numeroResidencia, bairro: bairro, cidade: cidade, estado: estado };
    };
    return ClienteInterface;
}());
exports.ClienteInterface = ClienteInterface;
//# sourceMappingURL=interface.js.map