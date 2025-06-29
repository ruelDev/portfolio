import express from "express";
import { deleteProject, getProject, getProjects, storeProject } from "../controllers/project.controller.js";

const productsRouter = express.Router();

productsRouter.get('/', getProjects);
productsRouter.post('/', storeProject);
productsRouter.get('/:id', getProject);
productsRouter.delete('/:id', deleteProject);

export default productsRouter;