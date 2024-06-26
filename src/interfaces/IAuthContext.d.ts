export interface IAuthContext {
  authTokens: AuthTokens | null;
  user: User | null;
  handleLogin: (values: FormikValues) => void;
  loginError: string | null;
  isLoadingUser: boolean;
  setLoginError: React.Dispatch<React.SetStateAction<string | null>>;
  handleLogout: () => void;
}