import { Request, Response } from 'express';
import { ClienteController } from './controller';

export class ClienteRoutes {
    private clienteController: ClienteController;

    constructor() {
        this.clienteController = new ClienteController();
    }

    create(req: Request, res: Response) {
        return this.clienteController.createCliente(req, res)
    }

    index(req: Request, res: Response) {
        return this.clienteController.getAll(req, res)
    }

    findOne(req: Request, res: Response) {
        return this.clienteController.getById(req, res)
    }

    update(req: Request, res: Response) {
        return this.clienteController.updateCliente(req, res)
    }

    destroy(req: Request, res: Response) {
        return this.clienteController.deleteCliente(req, res)
    }
}