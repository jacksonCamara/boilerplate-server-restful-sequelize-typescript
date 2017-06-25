"use strict";
var routes_1 = require("../../modules/Clientes/routes");
var auth_1 = require("../../modules/auth/auth");
var model = require('../../models');
var Routes = (function () {
    function Routes(app, auth) {
        this.router = new routes_1.ClienteRoutes();
        this.tokenRoute = new auth_1.default();
        this.auth = auth;
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        var _this = this;
        app.route('/api/clientes/all').get(this.router.index);
        app.route('/api/clientes/create').post(function (req, res) { return _this.router.create(req, res); });
        app.route('/api/clientes/:id').get(this.router.findOne);
        app.route('/api/clientes/:id/update').put(this.router.update);
        app.route('/api/clientes/:id/destroy').delete(this.router.destroy);
        app.route('/token').post(this.tokenRoute.auth);
    };
    return Routes;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Routes;
/**
 *     getRoutes(app: Application): void {
        app.route('/api/clientes/all').all(this.auth.authenticate()).get(this.router.index);
        app.route('/api/clientes/create').post(this.router.create);
        app.route('/api/clientes/:id').all(this.auth.authenticate()).get(this.router.findOne);
        app.route('/api/clientes/:id/update').all(this.auth.authenticate()).put(this.router.update);
        app.route('/api/clientes/:id/destroy').all(this.auth.authenticate()).delete(this.router.destroy);
        app.route('/token').post(this.tokenRoute.auth)
    }
 */ 
//# sourceMappingURL=routes.js.map