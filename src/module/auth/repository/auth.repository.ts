class AuthRepository {
  static async userExistanceCheck(email: string): Promise<boolean> {
    return true;
  }

  static async registerUser(email: string, password: string): Promise<boolean> {
    return true;
  }
}

export default AuthRepository;
