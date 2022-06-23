export type SignUpFormProps = {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  first: string;
  setFirst: (value: string) => void;
  last: string;
  setLast: (value: string) => void;
  password2: string;
  setPassword2: (value: string) => void;
  setSignUp: (signUp: boolean) => void;
  signUpSubmit: () => void;
};
