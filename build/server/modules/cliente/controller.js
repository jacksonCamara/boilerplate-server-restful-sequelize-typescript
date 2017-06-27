"use strict";
var service_1 = require("./service");
var response_handler_1 = require("../../api/responses/response-handler");
var ClienteController = (function () {
    function ClienteController() {
        this.responseHandler = new response_handler_1.ResponseHandler();
        this.clienteService = new service_1.ClienteService();
    }
    ClienteController.prototype.createCliente = function (req, res) {
        var _this = this;
        this.clienteService
            .create(req.body)
            .then(function (data) { return _this.responseHandler.onSuccess(res, data); })
            .catch(function (error) { return _this.responseHandler.onError(res, error, 'Erro ao inserir novo cliente'); });
    };
    ClienteController.prototype.getAll = function (req, res) {
        var _this = this;
        this.clienteService
            .getAll()
            .then(function (data) { return _this.responseHandler.onSuccess(res, data); })
            .catch(function (error) { return _this.responseHandler.onError(res, error, 'Erro ao buscar todos os clientes'); });
    };
    ClienteController.prototype.getById = function (req, res) {
        var _this = this;
        var userId = parseInt(req.params.id);
        this.clienteService.getById(userId)
            .then(function (data) { return _this.responseHandler.onSuccess(res, data); })
            .catch(function (error) { return _this.responseHandler.onError(res, error, 'Cliente não encontrado'); });
    };
    ClienteController.prototype.updateCliente = function (req, res) {
        var _this = this;
        this.clienteService.update(parseInt(req.params.id), req.body)
            .then(function (data) { return _this.responseHandler.onSuccess(res, data); })
            .catch(function (error) { return _this.responseHandler.onError(res, error, 'Falha ao atualizar cliente'); });
    };
    ClienteController.prototype.deleteCliente = function (req, res) {
        var _this = this;
        this.clienteService.delete(parseInt(req.params.id))
            .then(function (data) { return _this.responseHandler.onSuccess(res, data); })
            .catch(function (error) { return _this.responseHandler.onError(res, error, 'Erro ao excluir cliente'); });
    };
    return ClienteController;
}());
exports.ClienteController = ClienteController;
//# sourceMappingURL=controller.js.map