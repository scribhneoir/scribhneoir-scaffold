import Button from '../../../components/atoms/Button';
import Field from '../../../components/atoms/Field';
import { LoginFormProps } from './LoginForm.models';

const LoginForm = (props: LoginFormProps) => {
  const { email, setEmail, password, setPassword, setSignUp, loginSubmit } =
    props;

  return (
    <div aria-label='loginForm'>
      <Field
        onChange={setEmail}
        value={email}
        type='email'
        placeholder='email'
        ariaLabel='email'
      />
      <Field
        onChange={setPassword}
        value={password}
        type='password'
        placeholder='password'
        ariaLabel='password'
      />
      <div className='grid grid-cols-2 gap-8 justify-center content-center justify-self-center self-center py-2'>
        <Button
          onClick={() => {
            setSignUp(true);
          }}
          ariaLabel='formToggle'
        >
          Sign Up
        </Button>
        <Button
          primary
          onClick={() => {
            loginSubmit();
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
