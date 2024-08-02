import dotenv from 'dotenv';
import express, { Express, Request, Response, Application } from 'express';

import router from "./src/router";

dotenv.config();

const app:Application = express()
const port = process.env.PORT || 8000;

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})