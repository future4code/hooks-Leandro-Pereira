export class CustomError extends Error {
  constructor(statusCode: number, message: string) {
    super(message);
  }
}

export class InvalidName extends CustomError {
  constructor() {
    super(400, "Nome inválido");
  }
}

export class InvalidPassword extends CustomError {
  constructor() {
    super(400, "Senha inválida");
  }
}

export class InvalidEmail extends CustomError {
  constructor() {
    super(400, "Email inválido");
  }
}

export class InvalidToken extends CustomError {
  constructor() {
    super(400, "Token inválido.");
  }
}

export class UserNotFound extends CustomError {
  constructor() {
    super(400, "Usuário não encontrado.");
  }
}

export class UserAlreadyExist extends CustomError {
  constructor() {
    super(400, "Usuário já existe.");
  }
}
