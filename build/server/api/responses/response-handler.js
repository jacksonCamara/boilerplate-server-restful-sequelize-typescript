"use strict";
var HTTPStatus = require("http-status");
var ResponseHandler = (function () {
    function ResponseHandler() {
    }
    ResponseHandler.prototype.onSuccess = function (res, data) {
        res.status(HTTPStatus.OK).json({ payload: data });
    };
    ResponseHandler.prototype.onError = function (res, err, message) {
        console.log("Error: " + err);
        res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(message);
    };
    return ResponseHandler;
}());
exports.ResponseHandler = ResponseHandler;
//# sourceMappingURL=response-handler.js.map