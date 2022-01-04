import {BaseRouter} from "./router.config";
import {AuthRouter} from "./auth/auth.router";

const routes : Array<BaseRouter> = [
    new AuthRouter()
];

export {
    routes
}