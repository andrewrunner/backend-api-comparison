import express from "express";
import restApiRoutes from "./rest-api";
import graphQLRoutes from "./graphql";

const router = express.Router();

router.use(restApiRoutes);
router.use(graphQLRoutes);

export default router;