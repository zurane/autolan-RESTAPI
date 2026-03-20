import { Router } from "express";
import { getModelTutorials } from '../controllers/model.controller.js'

const modelRoutes = Router();

modelRoutes.get('/:id/tutorials', getModelTutorials);

export default modelRoutes;