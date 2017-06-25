import { Request, Response } from 'express';
import * as _ from 'lodash';
import authSuccess from '../../api/responses/authSuccess';
import authFail from '../../api/responses/authFail';
import { ClienteService } from '../Clientes/service'



class TokenRoutes {
    private clienteService = new ClienteService();
    auth(req: Request, res: Response) {
        const credentials = {
            email: req.body.email,
            password: req.body.password
        }
        if (credentials.hasOwnProperty('email') && credentials.hasOwnProperty('password')) {
            this.clienteService
                .getByEmail(credentials.email)
                .then(_.partial(authSuccess, res, credentials))
                .catch(_.partial(authFail, req, res))
        }
    }
}

export default TokenRoutes;