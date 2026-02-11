"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler_1 = __importDefault(require("../../../middleware/errorHandler"));
const bcryprt_handler_1 = require("../../../utils/bcryprt.handler");
const jwt_handler_1 = require("../../../utils/jwt.handler");
const auth_repository_1 = __importDefault(require("../repository/auth.repository"));
class AuthService {
    static async registerService(email, password) {
        if (!email || !password) {
            throw new errorHandler_1.default(400, "All fields are required");
        }
        const isExist = await auth_repository_1.default.userExistanceCheck(email);
        if (isExist) {
            throw new errorHandler_1.default(409, "User already exists");
        }
        const hashPassword = await (0, bcryprt_handler_1.bcyrptHashPassword)(password);
        if (!hashPassword) {
            throw new errorHandler_1.default(500, "Internal Server Error : Failed to hash password");
        }
        const isRegistered = await auth_repository_1.default.registerUser(email, hashPassword);
        if (!isRegistered) {
            throw new errorHandler_1.default(500, "Failed to register!");
        }
        const token = await (0, jwt_handler_1.jwtToken)({ role: "admin", adminid: "1" });
        if (!token) {
            throw new errorHandler_1.default(500, "Internal Server Error : Failed to generate Token");
        }
        return token;
    }
}
exports.default = AuthService;
