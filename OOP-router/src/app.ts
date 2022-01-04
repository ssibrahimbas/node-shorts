import express from "express";
import {IServer, Server, ServerParams} from "./server";
import {routes} from "./routes/routes";

const app = async() => {
    const serverParams : ServerParams = {
        PORT: +process.env.SERVER_PORT! || 5000,
        express
    };

    const server : IServer = new Server(serverParams);
    server.initRoutes(routes);
    server.start();
};
app().then();