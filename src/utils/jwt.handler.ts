import jwt from "jsonwebtoken";
import ThrowError from "../middleware/errorHandler";

export const jwtToken = async (payload: any) => {
  if (!process.env.JWT_SECRET_KEY) {
    throw new ThrowError(500, "Internal Server Error : Missing JWT Secret Key");
  }

  return jwt.sign(payload, process.env.JWT_SECRET_KEY!, { expiresIn: "2h" });
};
