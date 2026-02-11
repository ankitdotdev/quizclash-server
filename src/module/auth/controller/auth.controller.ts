import { Request, Response } from "express";
import { sendSuccess } from "../../../utils/response.handler";
import AuthService from "../service/auth.service";

class AuthController {
  static async registerUser(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const token = await AuthService.registerService(email, password);

      return sendSuccess(res, 201, "Registered Successfully!", token);

      return res.status(200).json({ messsage: "success" });
    } catch (error) {
      console.error(error);
    }
  }
}

export default AuthController;
