import { performPurchase, User } from "../src";

describe("Testes da função de balance", () => {
  test("Testando balance maior que o valor", () => {
    const user: User = {
      name: "Astrodev",
      balance: 150,
    };

    const result = performPurchase(user, 60);

    expect(result).toEqual({
      name: "Astrodev",
      balance: 90,
    });
  });

  test("Testando balance igual o valor", () => {
    const user: User = {
      name: "Astrodev",
      balance: 50,
    };

    const result = performPurchase(user, 50);

    expect(result).toEqual({
      ...user,
      balance: 0,
    });
  });

  test("Testando balance menor que valor", () => {
    const user: User = {
      name: "Astrodev",
      balance: 30,
    };

    const result = performPurchase(user, 50);

    expect(result).not.toBeDefined();
  });
});
