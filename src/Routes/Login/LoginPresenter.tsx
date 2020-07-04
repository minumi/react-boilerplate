import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '../../Components/Button';
import { Form } from '../../Components/Form';
import { Input, InputWrapper, Label, InputError } from '../../Components/Input';
import {
  LayoutBetween,
  LayoutCenter,
  LayoutSpacer,
} from '../../Components/Layout';
import { Link } from '../../Components/Link';
import { emailRegExp } from '../../Utils/regExps';
import { ValidationRules } from 'react-hook-form';

interface IErrorDetail {
  message?: string;
  type?: string;
}

interface IProps {
  onSubmit: () => void;
  errors: {
    email?: IErrorDetail;
    password?: IErrorDetail;
  };
  register: (rules?: ValidationRules) => void | any;
  loading: boolean;
}

const LoginPresenter: React.SFC<IProps> = ({
  onSubmit,
  register,
  loading,
  errors,
}) => {
  return (
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
              name="email"
              type="text"
              autoComplete="username"
              ref={register({ required: true, pattern: emailRegExp })}
              error={!!errors?.email}
            />
            <InputError>
              {errors?.email?.type === 'required' && 'E-mail is required.'}
              {errors?.email?.type === 'pattern' && 'E-mail is invalid.'}
            </InputError>
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              ref={register({ required: true })}
              error={!!errors?.password}
            />
            <InputError>
              {errors?.password?.type === 'required' && 'Password is required.'}
            </InputError>
          </InputWrapper>
          <Button disabled={loading} fill="true" size="big">
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
};

export default LoginPresenter;
