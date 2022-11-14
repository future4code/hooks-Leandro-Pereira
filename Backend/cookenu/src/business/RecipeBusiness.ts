import { CustomError, InvalidToken } from "../errors/CustomError";
import { createRecipes, Recipe } from "../model/recipe";
import { TokenGenerator } from "../services/TokenGenerator";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { IdGenerator } from "../services/IdGenerator";

export class RecipeBusiness {
  private tokenGenerator = new TokenGenerator();
  private recipeDatabase = new RecipeDatabase();
  private idGenerator = new IdGenerator();
  constructor() {
    this.tokenGenerator;
    this.recipeDatabase;
    this.idGenerator;
  }

  public createRecipes = async (recipe: createRecipes, token: string) => {
    try {
      if (!token) {
        throw new InvalidToken();
      }

      const tokenData = this.tokenGenerator.TokenData(token);

      if (!tokenData.id) {
        throw new InvalidToken();
      }

      if (!recipe.title || !recipe.description) {
        throw new CustomError(400, "Dados inválidos");
      }

      const id: string = IdGenerator.generateId();

      const newRecipe: Recipe = {
        id,
        title: recipe.title,
        description: recipe.description,
      };

      await this.recipeDatabase.createRecipes(newRecipe);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getRecipesById = async (id: string, token: string) => {
    try {
      if (!token) {
        throw new InvalidToken();
      }

      const tokenData = this.tokenGenerator.TokenData(token);

      if (!tokenData.id) {
        throw new InvalidToken();
      }

      const result = await this.recipeDatabase.getRecipesById(id);
      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
