import { Request, Response } from 'express';
import { ClienteService } from './service';
import { ResponseHandler } from '../../api/responses/response-handler';

export class ClienteController {
    private responseHandler: ResponseHandler;
    private clienteService: ClienteService;

    constructor() {
        this.responseHandler = new ResponseHandler();
        this.clienteService = new ClienteService();
    }

    public createCliente(req: Request, res: Response) {
        this.clienteService
            .create(req.body)
            .then(data => this.responseHandler.onSuccess(res, data))
            .catch(error => this.responseHandler.onError(res, error, 'Erro ao inserir novo cliente'))
    }

    public getAll(req: Request, res: Response) {
        this.clienteService
            .getAll()
            .then(data => this.responseHandler.onSuccess(res, data))
            .catch(error => this.responseHandler.onError(res, error, 'Erro ao buscar todos os clientes'))
    }


    public getById(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        this.clienteService.getById(userId)
            .then(data => this.responseHandler.onSuccess(res, data))
            .catch(error => this.responseHandler.onError(res, error, 'Cliente não encontrado'))
    }

    updateCliente(req: Request, res: Response) {
        this.clienteService.update(parseInt(req.params.id), req.body)
            .then(data => this.responseHandler.onSuccess(res, data))
            .catch(error => this.responseHandler.onError(res, error, 'Falha ao atualizar cliente'))
    }

    deleteCliente(req: Request, res: Response) {
        this.clienteService.delete(parseInt(req.params.id))
            .then(data => this.responseHandler.onSuccess(res, data))
            .catch(error => this.responseHandler.onError(res, error, 'Erro ao excluir cliente'))
    }
}
