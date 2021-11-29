import express from "express";
const app = express();

import {performanceMiddleware} from "./middlewares/performance.middleware";

app.get("/", performanceMiddleware, (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => console.log('app listen at 3000 port'));