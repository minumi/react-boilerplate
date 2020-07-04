import React, { FormEvent, ChangeEvent } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '../../Components/Button';
import { Form } from '../../Components/Form';
import { Input, InputWrapper, Label } from '../../Components/Input';
import { LayoutCenter } from '../../Components/Layout';
import LayoutSpacer from '../../Components/Layout/LayoutSpacer';

interface IProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
}
const LoginPresenter: React.SFC<IProps> = ({ onSubmit, onChange, loading }) => (
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
        <Button disabled={loading} fill={true} size={'big'}>
          {loading ? 'Loading...' : 'Login'}
        </Button>
      </Form>
    </LayoutCenter>
  </>
);

export default LoginPresenter;
