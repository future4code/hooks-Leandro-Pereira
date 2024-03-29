import { calculateEmployeeSalary } from "../src/calculateEmployeeSalary";

describe.skip("Testes da função calculateEmployeeSalary", () => {
  test("Teste 1: Erro no input, faltando, ao menos, uma informação", () => {
    expect.assertions(2);
    const input = {
      employeeName: "",
      baseSalary: 10000,
      benefits: [1000],
      extraHours: 5,
    };

    const validatorMock = jest.fn(() => {
      return {
        isValid: false,
        errors: [],
      };
    });

    try {
      calculateEmployeeSalary(input, validatorMock);
    } catch (error: any) {
      expect(validatorMock).toBeCalled();
      expect(error.message).toBe("Missing Properties");
    }
  });

  test("Teste 2: Erro no input com alguma informação errada (valor negativo nas horas)", () => {
    expect.assertions(2);
    const input = {
      employeeName: "Maria",
      baseSalary: 10000,
      benefits: [1000],
      extraHours: -5,
    };

    const validatorMock = jest.fn(() => {
      return {
        isValid: true,
        errors: [],
      };
    });

    try {
      calculateEmployeeSalary(input, validatorMock);
    } catch (error: any) {
      expect(validatorMock).toBeCalledTimes(1);
      expect(error.message).toBe("Invalid ExtraHours");
    }
  });

  test("Teste 3: Input correto e cálculo do salário efetuado", () => {
    const input = {
      employeeName: "Maria",
      baseSalary: 10000,
      benefits: [1000],
      extraHours: 0,
    };
    const validatorMock = jest.fn(() => {
      return {
        isValid: true,
        errors: [],
      };
    });
    const result = calculateEmployeeSalary(input, validatorMock);
    expect(validatorMock).toBeCalledWith(input)
    expect(result).toBe(11000);
  });
});
