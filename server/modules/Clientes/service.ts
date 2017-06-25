import * as Bluebird from 'bluebird';
import { ClienteInterface, ICliente, ITelefone } from './interface';
const model = require('../../models');

export class ClienteService {
    private clienteInterface = new ClienteInterface();

    public create(cliente: any) {
        console.log("=========================== imprimindo o model no service=================================")
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
            })
    }

    public getAll(): Bluebird<ICliente> {
        return model.clientes.findAll({
            include: [{ model: model.telefones }, { model: model.enderecos }],
            order: ['nome']
        })
            .then(data => {
                return this.clienteInterface.createClientes(data)
            })
    }

    public getById(id: number): Bluebird<ICliente> {
        return model.clientes.findOne({
            where: { id: id },
            include: [{ model: model.telefones }, { model: model.enderecos }]
        })
            .then(data => {
                return this.clienteInterface.createCliente(data)
            })
    }


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
