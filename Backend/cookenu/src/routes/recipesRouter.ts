import express from 'express';
import { RecipeController } from '../controller/RecipeController';

export const recipesRouter = express.Router();

const recipesController = new RecipeController();

recipesRouter.post('/create', recipesController.createRecipes);

recipesRouter.get('/:id', recipesController.getRecipesById);





