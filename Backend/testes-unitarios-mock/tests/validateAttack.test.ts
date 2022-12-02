import { Character } from "../src/validateCharacter";
import { performAttack } from "../src/validateAttack";

describe("Teste da função de ataque", () => {
  test("Atacar", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "Mitsurugi",
      life: 1500,
      defense: 200,
      strength: 1000,
    };

    const defender: Character = {
      name: "Cervants",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    performAttack(attacker, defender, validatorMock);

    expect(defender.life).toEqual(900);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });

  test("Deve retornar erro de personagem inválido", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Character = {
      name: "",
      life: 1500,
      defense: 200,
      strength: 1000,
    };

    const defender: Character = {
      name: "Seoung Mina",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    try {
      performAttack(attacker, defender, validatorMock as any);
    } catch (err: any) {
      expect(err.message).toBe("Personagem inválido");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
});
