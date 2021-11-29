import { Request, Response, NextFunction } from "express";

const performanceMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const startedDate = Date.now();
    res.on("finish", () => {
        const elapsedTime = Date.now() - startedDate;
        console.log(`${req.method} ${req.path} took ${elapsedTime}ms`);
    });
    next();
};

export {performanceMiddleware};