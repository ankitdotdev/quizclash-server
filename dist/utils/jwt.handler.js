"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errorHandler_1 = __importDefault(require("../middleware/errorHandler"));
const jwtToken = async (payload) => {
    if (!process.env.JWT_SECRET_KEY) {
        throw new errorHandler_1.default(500, "Internal Server Error : Missing JWT Secret Key");
    }
    return jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "2h" });
};
exports.jwtToken = jwtToken;
