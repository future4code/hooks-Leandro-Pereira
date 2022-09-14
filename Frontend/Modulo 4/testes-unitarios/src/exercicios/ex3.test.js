import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
  test("checar itens duplicados", () => {
    const checar = checaItensDuplicados([123, 321, 123]);
    expect(checar).toEqual(true);
  });

  test("checar itens duplicados", () => {
    const checar = checaItensDuplicados(["arara", "jabuti", "raposa", "raposa"]);
    expect(checar).toEqual(true);
  });

  test("checar itens duplicados", () => {
    const checar = checaItensDuplicados([351,428,351]);
    expect(checar).toEqual(true);
  });

  test("checar itens duplicados", () => {
    const checar = checaItensDuplicados(['leão', 'onça', 'camarões', 'camaleão'])
    expect(checar).toEqual(false);
  })
});
