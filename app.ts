import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import router from "./router/index";

dotenv.config();

const app:Application = express()
const port = process.env.PORT || 3000;

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})