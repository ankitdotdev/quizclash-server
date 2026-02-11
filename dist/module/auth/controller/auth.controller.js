"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_handler_1 = require("../../../utils/response.handler");
const auth_service_1 = __importDefault(require("../service/auth.service"));
class AuthController {
    static async registerUser(req, res) {
        try {
            const { email, password } = req.body;
            const token = await auth_service_1.default.registerService(email, password);
            return (0, response_handler_1.sendSuccess)(res, 201, "Registered Successfully!", token);
            return res.status(200).json({ messsage: "success" });
        }
        catch (error) {
            console.error(error);
        }
    }
}
exports.default = AuthController;
