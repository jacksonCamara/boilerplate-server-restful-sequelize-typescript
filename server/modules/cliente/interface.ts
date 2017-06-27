export class ClienteInterface {

    public createCliente({ id, nome, cpf, sexo, email, password, telefones, enderecos }: any): ICliente {
        telefones = telefones.map(t => this.createTelefone(t));
        enderecos = enderecos.map(e => this.createEndereco(e));
        return {
            id, nome, cpf, sexo, email, password, telefones, enderecos
        }
    }

    public createClientes(data: any[]): ICliente[] {
        return data.map(d => {
            return this.createCliente(d)
        })
    }

    private createTelefone({ numero }: any): ITelefone {
        return { numero }
    }

    private createEndereco({ rua, numeroResidencia, bairro, cidade, estado }: any): IEndereco {
        return { rua, numeroResidencia, bairro, cidade, estado }
    }
}


export interface ICliente {
    readonly id: number,
    nome: string,
    cpf: string;
    sexo: string;
    email: string,
    password: string
    telefones: Array<ITelefone>
    enderecos: Array<IEndereco>
}


export interface ITelefone {
    numero: string
}


export interface IEndereco {
    rua: string;
    numeroResidencia: string;
    bairro: string;
    cidade: string;
    estado: string;
}
