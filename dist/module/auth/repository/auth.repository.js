"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthRepository {
    static async userExistanceCheck(email) {
        return true;
    }
    static async registerUser(email, password) {
        return true;
    }
}
exports.default = AuthRepository;
