import { Response } from 'express';
import * as HTTPStatus from 'http-status';

export class ResponseHandler {

    public onSuccess(res: Response, data: any) {
        res.status(HTTPStatus.OK).json({ payload: data });
    }

    public onError(res: Response,  err: any, message: string,) {
        console.log(`Error: ${err}`);
        res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(message)
    }
}

