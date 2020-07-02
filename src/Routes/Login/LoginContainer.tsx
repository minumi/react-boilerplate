import React, {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from 'react';
import { useMutation } from 'react-apollo';
import { Helmet } from 'react-helmet';
import { Button } from '../../Components/Button';
import { Form } from '../../Components/Form';
import { Input, InputWrapper, Label } from '../../Components/Input';
import { LayoutCenter } from '../../Components/Layout';
import LayoutSpacer from '../../Components/Layout/LayoutSpacer';
import { LOG_USER_IN } from '../../sharedQueries.local';
import { LOGIN_USER } from './LoginQueries';

const LoginContainer = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [loginUser, { data, loading }] = useMutation(LOGIN_USER);
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
  }, [data, logUserIn]);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value } = e.target;
    setForm({
      ...form,
      [id]: value,
    });
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
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
