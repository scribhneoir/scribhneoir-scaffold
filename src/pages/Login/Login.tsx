import { useState } from 'react';

import Card from '../../components/atoms/Card';
import Header from '../../components/atoms/Header';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { LoginProps } from './Login.models';

const Login = (props: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [signUp, setSignUp] = useState(false);

  const signUpSubmit = async () => {};
  const loginSubmit = async () => {};
  return (
    <div aria-label='login'>
      <div className='flex flex-row mr-auto  my-2'>
        <Header>Login</Header>
      </div>
      <Card>
        {signUp ? (
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
        ) : (
          <LoginForm
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            setSignUp={setSignUp}
            loginSubmit={loginSubmit}
          />
        )}
      </Card>
    </div>
  );
};

export default Login;
