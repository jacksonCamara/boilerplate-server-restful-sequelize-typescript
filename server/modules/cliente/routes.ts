import { Request, Response } from 'express';
import { ClienteController } from './controller';

export class ClienteRoutes {
    private clienteController: ClienteController;

    constructor() {
        this.clienteController = new ClienteController();
    }

    public create(req: Request, res: Response) {
        return this.clienteController.createCliente(req, res)
    }

    public index(req: Request, res: Response) {
        return this.clienteController.getAll(req, res)
    }

    public findOne(req: Request, res: Response) {
        return this.clienteController.getById(req, res)
    }

    public update(req: Request, res: Response) {
        return this.clienteController.updateCliente(req, res)
    }

    public destroy(req: Request, res: Response) {
        return this.clienteController.deleteCliente(req, res)
    }
}