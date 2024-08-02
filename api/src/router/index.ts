import express from "express";
import restApiRoutes from "@/router/rest-api";
import graphQLRoutes from "@/router/graphql";

const router = express.Router();

router.use(restApiRoutes);
router.use(graphQLRoutes);

export default router;