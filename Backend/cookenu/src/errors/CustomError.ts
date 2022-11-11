export class CustomError extends Error {
  constructor(statusCode: number, message: string) {
    super(message);
  }
}

export class InvalidName extends CustomError {
  constructor() {
    super(400, "Nome inválido")
  }
}

export class InvalidPassword extends CustomError {
  constructor() {
    super(400, "Senha inválida")
  }
}

export class InvalidEmail extends CustomError {
  constructor() {
    super(400, "Email inválido")
  }
}

export class UserNotFound extends CustomError {
  constructor() {
    super(400, "Usuário não encontrado.")

  }
}