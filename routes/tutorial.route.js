import Router from 'express';
import { getAllTutorials } from '../controllers/tutorial.controller.js';


const tutorialRoute = Router();

tutorialRoute.get('/', getAllTutorials);

export default tutorialRoute;