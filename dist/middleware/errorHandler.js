"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ThrowError extends Error {
    statusCode;
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, ThrowError.prototype);
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = ThrowError;
