import { CustomError } from "../errors/CustomError";
import { Recipe } from "../model/recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
  public createRecipes = async (recipe: Recipe) => {
    try {
      await RecipeDatabase.connection("Cookenu_recipes").insert({
        id: recipe.id,
        title: recipe.title,
        description: recipe.description,
      });
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getRecipesById = async (id: string) => {
    try {
      const result = await RecipeDatabase.connection("Cookenu_recipes")
        .select()
        .where({ id });

      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
