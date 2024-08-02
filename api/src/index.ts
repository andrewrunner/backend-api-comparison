import dotenv from 'dotenv';
import {Server} from "./server";
import router from "./router";

dotenv.config();
const port = process.env.PORT || 8000;

const server = new Server();
server.useRouter(router);
server.start(port);