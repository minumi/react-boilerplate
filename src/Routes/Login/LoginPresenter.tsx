import React, { ChangeEvent, FormEvent } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '../../Components/Button';
import { Form } from '../../Components/Form';
import { Input, InputWrapper, Label } from '../../Components/Input';
import {
  LayoutBetween,
  LayoutCenter,
  LayoutSpacer,
} from '../../Components/Layout';
import { Link } from '../../Components/Link';

interface IProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
}
const LoginPresenter: React.SFC<IProps> = ({ onSubmit, onChange, loading }) => (
  <>
    <Helmet>
      <title>Log In</title>
    </Helmet>
    <LayoutSpacer height="50px" />
    <LayoutCenter>
      <Form onSubmit={onSubmit} className="login-form">
        <InputWrapper>
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="text"
            autoComplete="username"
            onChange={onChange}
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            autoComplete="current-password"
            onChange={onChange}
          />
        </InputWrapper>
        <Button disabled={loading} fill={true} size={'big'}>
          {loading ? 'Loading...' : 'Log In'}
        </Button>
        <LayoutSpacer height="10px" />
        <LayoutBetween>
          <div></div>
          <Link to="/signup">Create an account</Link>
        </LayoutBetween>
      </Form>
    </LayoutCenter>
  </>
);

export default LoginPresenter;
