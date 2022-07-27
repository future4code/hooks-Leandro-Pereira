import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  test("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

  test("retorna true para 'radar'", ()=>{
    const ehPalindromo = checaPalindromo("radar");
    expect(ehPalindromo).toEqual(true);
  })

  test("retorna true para 'level'", ()=>{
    const ehPalindromo = checaPalindromo("level");
    expect(ehPalindromo).toEqual(true);
  })

  test("retorna false para 'jubalta'", ()=>{
    const ehPalindromo = checaPalindromo("jubalta");
    expect(ehPalindromo).toEqual(false);
  })
});
