import { useState, useEffect } from "react";

export const useValidEmail = (email: string) => {
  const [valid, setValid] = useState<string | undefined>(undefined);

  useEffect(() => {
    setValid(
      /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(email) || !email
        ? undefined
        : "please enter a valid email"
    );
  }, [email]);

  return [valid];
};

export const useValidPassword = (password: string) => {
  const [valid, setValid] = useState<string | undefined>(undefined);

  useEffect(() => {
    setValid(
      !password
        ? undefined
        : password.length < 8
        ? "password must be longer than 8 characters"
        : !/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)
        ? "password must contain a special character"
        : !/[0-9]/.test(password)
        ? "password must contain a number"
        : undefined
    );
  }, [password]);

  return [valid];
};
