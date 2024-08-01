import express, { Express, Request, Response , Application } from 'express';
//import dotenv from 'dotenv';
import router from "./router";

//dotenv.config();

const app:Application = express()
const port = 3000; // process.env.PORT || 3000;

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})