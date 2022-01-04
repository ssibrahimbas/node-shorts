import {NextFunction, Request, Response} from "express";

class AuthController {
    constructor() {};

    login = async(req: Request, res: Response, next: NextFunction) : Promise<void> => {
        res.status(200)
            .json({
                success: true,
                message: "Successfully Logged In."
            })
        res.end();
    };
};

export default new AuthController();