import * as passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import {ClienteService} from './modules/Clientes/service';
const config = require('./config/env/config')();

export default function AuthConfig() {
    const clienteService = new ClienteService();
    let opts = {
        secretOrKey: config.secret,
        jwtFromRequest: ExtractJwt.fromAuthHeader()
    };

    passport.use(new Strategy(opts, (jwtPayload, done) => {
        clienteService.getById(jwtPayload.id)
            .then(cliente => {
                if (cliente) {
                    return done(null, {
                        id: cliente.id,
                        email: cliente.email
                    })
                }
                return done(null, false);
            })
            .catch(error => {
                done(error, null)
            })
    }));

    return {
        initialize: () => {
            return passport.initialize();
        },
        authenticate: () => {
            return passport.authenticate('jwt', { session: false })
        }
    }
}