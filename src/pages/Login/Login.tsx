import { useState } from "react";
import { BsClockFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { useAtom } from "jotai";
import * as Realm from "realm-web";

import Card from "../../components/Atoms/Card";
import Header from "../../components/Atoms/Header";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { LoginProps } from "./Login.models";
import { appAtom } from "../../App";

const Login = (props: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [signUp, setSignUp] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const history = useHistory();
  const [app] = useAtom(appAtom);

  const signUpSubmit = async () => {
    await app.emailPasswordAuth.registerUser({ email, password }).then(() => {
      loginSubmit();
    });
  };
  const loginSubmit = async () => {
    setIsLoggingIn(true);
    try {
      await app
        .logIn(Realm.Credentials.emailPassword(email, password))
        .then(() => {
          history.push("/calendar");
        });
    } catch (err) {
      console.error("Failed to log in", err);
    }
  };
  return (
    <>
      <div className="flex flex-row mr-auto  my-2">
        <Header>CL</Header>
        <Header>
          <BsClockFill />
        </Header>
        <Header>CK N' WALK</Header>
      </div>
      <Card flipped={signUp}>
        <LoginForm
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          setSignUp={setSignUp}
          loginSubmit={loginSubmit}
        />
        <SignUpForm
          first={first}
          last={last}
          email={email}
          password={password}
          password2={password2}
          setEmail={setEmail}
          setPassword={setPassword}
          setFirst={setFirst}
          setLast={setLast}
          setPassword2={setPassword2}
          setSignUp={setSignUp}
          signUpSubmit={signUpSubmit}
        />
      </Card>
    </>
  );
};

export default Login;
