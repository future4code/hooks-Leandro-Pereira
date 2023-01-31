export class CustomError extends Error {
    constructor(
        public statusCode: number,
        public message: string
    ) {
        super(message)
    }
}

export class InvalidRequest extends CustomError{
    constructor(){
        super(400, "fill in the fields correctly")
    }
}

export class InvalidName extends CustomError{
    constructor(){
        super(400, "InvalidName")
    }
}