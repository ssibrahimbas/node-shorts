import {BaseRouter, RouterMethods} from "../router.config";
import AuthController from "../../controllers/auth.controller";

class AuthRouter extends BaseRouter {
    path = "auth";
    routes = [
        {
            path: "login",
            version: 1,
            method: RouterMethods.POST,
            controller: AuthController.login,
            middlewares: []
        }
    ]
};

export {
    AuthRouter
}