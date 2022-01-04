import {Request, Response, NextFunction, Router} from "express";

/**
 * @description Available HTTP Methods.
 * */
enum RouterMethods {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    DELETE = 'delete',
    ALL = 'all'
};

interface IRoute {
    path: string;
    version: number;
    method: RouterMethods;
    controller: (req: Request, res: Response, next: NextFunction) => Promise<void> | void;
    middlewares: Array<((req: Request, res: Response, next: NextFunction) => Promise<void> | void)>;
};

abstract class BaseRouter {
  public router : Router = Router();
  public abstract path : string;
  protected abstract readonly routes : Array<IRoute>;

  public setRoutes = () : Router => {
      for(const route of this.routes) {
          for(const middleware of route.middlewares) {
              this.router.use(this.makePath(route.path, route.version), middleware);
          };
          this.router[route.method](this.makePath(route.path, route.version), route.controller);
      }
      return this.router;
  };

  makePath = (path: string, version: number) : string => {
      return `/v${version}/${path}`;
  }
};

export {
    RouterMethods,
    IRoute,
    BaseRouter
}