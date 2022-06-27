import Button from '../../../components/atoms/Button';
import Field from '../../../components/atoms/Field';
import { useValidPassword, useValidEmail } from '../../../hooks/validation';
import { SignUpFormProps } from './SignUpForm.models';

const SignUpForm = (props: SignUpFormProps) => {
  const {
    first,
    setFirst,
    last,
    setLast,
    email,
    setEmail,
    password,
    setPassword,
    password2,
    setPassword2,
    setSignUp,
    signUpSubmit,
  } = props;
  const [passwordError] = useValidPassword(password);
  const [emailError] = useValidEmail(email);
  return (
    <>
      <Field
        onChange={setFirst}
        value={first}
        type='text'
        placeholder='first name'
      />
      <Field
        onChange={setLast}
        value={last}
        type='text'
        placeholder='last name'
      />
      <Field
        onChange={setEmail}
        value={email}
        error={emailError}
        type='email'
        placeholder='email'
      />
      <Field
        onChange={setPassword}
        value={password}
        error={passwordError}
        type='password'
        placeholder='password'
      />
      <Field
        onChange={setPassword2}
        value={password2}
        error={password !== password2 ? 'Passwords do not match' : undefined}
        type='password'
        placeholder='retype password'
      />
      <div className='grid grid-cols-2 gap-8 justify-center content-center justify-self-center self-center py-2'>
        <Button
          onClick={() => {
            setSignUp(false);
          }}
        >
          Login
        </Button>
        <Button
          primary
          onClick={() => {
            signUpSubmit();
          }}
        >
          Sign Up
        </Button>
      </div>
    </>
  );
};

export default SignUpForm;
