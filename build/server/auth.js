"use strict";
var passport = require("passport");
var passport_jwt_1 = require("passport-jwt");
var service_1 = require("./modules/Clientes/service");
var enviroment_1 = require("./config/env/enviroment");
function AuthConfig() {
    var config = new enviroment_1.Enviroment();
    var clienteService = new service_1.ClienteService();
    var opts = {
        secretOrKey: config.secret,
        jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeader()
    };
    passport.use(new passport_jwt_1.Strategy(opts, function (jwtPayload, done) {
        clienteService.getById(jwtPayload.id)
            .then(function (cliente) {
            if (cliente) {
                return done(null, {
                    id: cliente.id,
                    email: cliente.email
                });
            }
            return done(null, false);
        })
            .catch(function (error) {
            done(error, null);
        });
    }));
    return {
        initialize: function () {
            return passport.initialize();
        },
        authenticate: function () {
            return passport.authenticate('jwt', { session: false });
        }
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AuthConfig;
//# sourceMappingURL=auth.js.map