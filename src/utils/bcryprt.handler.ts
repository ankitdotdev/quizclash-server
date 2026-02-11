import bcrypt from "bcrypt";

export const bcyrptHashPassword = (password: string): Promise<string> => {
  return bcrypt.hash(password, 10);
};
