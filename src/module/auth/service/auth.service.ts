import ThrowError from "../../../middleware/errorHandler";
import { bcyrptHashPassword } from "../../../utils/bcryprt.handler";
import { jwtToken } from "../../../utils/jwt.handler";
import AuthRepository from "../repository/auth.repository";

class AuthService {
  static async registerService(email: string, password: string) {
    if (!email || !password) {
      throw new ThrowError(400, "All fields are required");
    }

    const isExist = await AuthRepository.userExistanceCheck(email);

    if (isExist) {
      throw new ThrowError(409, "User already exists");
    }

    const hashPassword = await bcyrptHashPassword(password);

    if (!hashPassword) {
      throw new ThrowError(
        500,
        "Internal Server Error : Failed to hash password",
      );
    }

    const isRegistered = await AuthRepository.registerUser(email, hashPassword);

    if (!isRegistered) {
      throw new ThrowError(500, "Failed to register!");
    }

    const token = await jwtToken({ role: "admin", adminid: "1" });

    if (!token) {
      throw new ThrowError(
        500,
        "Internal Server Error : Failed to generate Token",
      );
    }

    return token;
  }
}

export default AuthService;
