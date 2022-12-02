import { UserBusiness } from "../../src/business/UserBusiness";
import { CustomError } from "../../src/errors/CustomError";
import { USER_ROLES } from "../../src/model/User";
import { HashGeneratorMock } from "./mocks/HashGeneratorMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { TokenGeneratorMock } from "./mocks/TokenGeneratorMock";
import { UserDatabaseMock } from "./mocks/UserDatabaseMock";

const idGenerator = new IdGeneratorMock();

const userBusiness = new UserBusiness(
  new UserDatabaseMock(),
  new HashGeneratorMock(),
  idGenerator,
  new TokenGeneratorMock()
);

describe("Testes no Signup", () => {
  test("Teste 1: Erro que deve retornar quando o nome está vazio", async () => {
    expect.assertions(3);
    try {
      await userBusiness.signup("", "email@email", "123456", USER_ROLES.NORMAL);
    } catch (error: any) {
      expect(error).toBeInstanceOf(CustomError);
      expect(error.statusCode).toBe(422);
      expect(error.message).toBe("Missing input");
    }
  });

  test("Teste 2: Erro que deve retornar quando o email é inválido", async () => {
    expect.assertions(3);
    try {
      await userBusiness.signup(
        "Mockinho",
        "emailemail",
        "123456",
        USER_ROLES.NORMAL
      );
    } catch (error: any) {
      expect(error).toBeInstanceOf(CustomError);
      expect(error.statusCode).toBe(422);
      expect(error.message).toBe("Invalid email");
    }
  });
  test("Teste 3: Erro que deve retornar quando a senha é inválida", async () => {
    expect.assertions(3);
    try {
      await userBusiness.signup(
        "Mockinho",
        "email@email",
        "12",
        USER_ROLES.NORMAL
      );
    } catch (error: any) {
      expect(error).toBeInstanceOf(CustomError);
      expect(error.statusCode).toBe(422);
      expect(error.message).toBe("Invalid password");
    }
  });
  test("Teste 4: Erro que deve retornar quando o tipo de usuário é inválido", async () => {
    expect.assertions(3);
    try {
      await userBusiness.signup("Mockinho", "email@email", "123456", "role");
    } catch (error: any) {
      expect(error).toBeInstanceOf(CustomError);
      expect(error.statusCode).toBe(422);
      expect(error.message).toBe("Invalid user role");
    }
  });
  test("Teste 5: Sucesso no cadastro e verificação do token de acesso ", async () => {
    const result = await userBusiness.signup(
      "Mockinho",
      "email@email",
      "123456",
      USER_ROLES.ADMIN
    );
    expect(idGenerator.generate).toBeCalledTimes(1); // consigo testar, já que usei o jest.fn
    expect(result).toBeDefined();
    expect(result).toEqual({ accessToken: "token" });
  });
});

describe("Teste no Login", () => {
  test("Teste 1: Erro que deve retornar quando o email fornecido não existe", async () => {
    expect.assertions(3);
    try {
      await userBusiness.login("não-email", "123456");
    } catch (error: any) {
      expect(error).toBeInstanceOf(CustomError);
      expect(error.statusCode).toBe(401);
      expect(error.message).toBe("Invalid credentials");
    }
  });

  test("Teste 2: Erro que deve retornar quando a senha está errada", async () => {
    expect.assertions(3);
    try {
      await userBusiness.login("email", "1");
    } catch (error: any) {
      expect(error).toBeInstanceOf(CustomError);
      expect(error.statusCode).toBe(401);
      expect(error.message).toBe("Invalid credentials");
    }
  });

  test("Teste 3: Sucesso no login e verificação do token de acesso ", async () => {
    const result = await userBusiness.login("email", "123456");
    expect(result).toBeDefined();
    expect(result).toEqual({ accessToken: "token" });
  });
});

