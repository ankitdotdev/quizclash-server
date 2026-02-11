class ThrowError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);

    this.statusCode = statusCode;

    Object.setPrototypeOf(this, ThrowError.prototype);

    Error.captureStackTrace(this, this.constructor);
  }
}


export default ThrowError