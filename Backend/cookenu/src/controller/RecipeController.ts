import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { createRecipes } from "../model/recipe";

export class RecipeController {
  private recipeBusiness = new RecipeBusiness();

  constructor() {
    this.recipeBusiness;
  }

  public createRecipes = async (req: Request, res: Response) => {
    try {
      const { title, description } = req.body;
      const token = req.headers.authorization as string;

      const newRecipe: createRecipes = {
        title,
        description,
      };

      await this.recipeBusiness.createRecipes(newRecipe, token);
      res.status(200).send({ message: "Receita criada!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getRecipesById = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const { id } = req.params;
      const result = await this.recipeBusiness.getRecipesById(id, token);

      res.status(200).send({ message: result, token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
