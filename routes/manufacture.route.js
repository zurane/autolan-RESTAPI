import { Router } from "express";
import {getManufacturer} from '../controllers/manufacture.controller.js'

const manufacturerRoutes = Router();

manufacturerRoutes.get('/:name/models', getManufacturer);

export default manufacturerRoutes;