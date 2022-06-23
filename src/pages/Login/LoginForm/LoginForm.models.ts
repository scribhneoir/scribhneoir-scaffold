export type LoginFormProps = {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  setSignUp: (signUp: boolean) => void;
  loginSubmit: () => void;
};
