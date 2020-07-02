import React, {
  useState,
  FormEventHandler,
  ChangeEventHandler,
  useEffect,
} from 'react';
import { Button } from '../../Components/Button';
import { InputWrapper, Input, Label } from '../../Components/Input';
import { Form } from '../../Components/Form';
import { LayoutCenter } from '../../Components/Layout';
import LayoutSpacer from '../../Components/Layout/LayoutSpacer';
import { useMutation } from 'react-apollo';
import { LOGIN_USER } from './LoginQueries';
import { LOG_USER_IN } from '../../sharedQueries.local';

const LoginContainer = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);
  const [logUserIn] = useMutation(LOG_USER_IN);

  const onSubmit: FormEventHandler<HTMLFormElement> = () => {
    console.log(form);
    const { email, password } = form;
    loginUser({
      variables: {
        email,
        password,
      },
    });
  };

  useEffect(() => {
    if (data) {
      const {
        LoginUser: { ok, token },
      } = data;
      if (ok && token)
        logUserIn({
          variables: {
            token,
          },
        });
    }
  }, [data]);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value } = e.target;
    setForm({
      ...form,
      [id]: value,
    });
  };

  return (
    <>
      <LayoutSpacer height="50px" />
      <LayoutCenter>
        <Form onSubmit={onSubmit} className="login-form">
          <InputWrapper>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="text" onChange={onChange} />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" onChange={onChange} />
          </InputWrapper>
          <Button disabled={loading} fill={true}>
            {loading ? 'Loading...' : 'Login'}
          </Button>
        </Form>
      </LayoutCenter>
    </>
  );
};

export default LoginContainer;
