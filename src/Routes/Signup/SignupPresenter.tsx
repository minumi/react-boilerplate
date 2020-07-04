import React from 'react';
import { Helmet } from 'react-helmet';
import { ValidationRules } from 'react-hook-form';
import { Button } from '../../Components/Button';
import { Form } from '../../Components/Form';
import { Input, InputError, InputWrapper, Label } from '../../Components/Input';
import {
  LayoutBetween,
  LayoutCenter,
  LayoutSpacer,
} from '../../Components/Layout';
import { Link } from '../../Components/Link';
import { emailRegExp } from '../../Utils/regExps';

interface IErrorDetail {
  message?: string;
  type?: string;
}

interface IProps {
  onSubmit: () => void;
  errors: {
    email?: IErrorDetail;
    password?: IErrorDetail;
    passwordConfirm?: IErrorDetail;
    fullName?: IErrorDetail;
  };
  register: (rules?: ValidationRules) => void | any;
  loading: boolean;
}

const SignupPresenter: React.SFC<IProps> = ({
  onSubmit,
  register,
  loading,
  errors,
}) => (
  <>
    <Helmet>
      <title>Sign Up</title>
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
            autoComplete="email"
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
            autoComplete="new-password"
            ref={register({ required: true })}
            error={!!errors?.email}
          />
          <InputError>
            {errors?.password?.type === 'required' && 'Password is required.'}
          </InputError>
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="passwordConfirm">Password Confirm</Label>
          <Input
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            autoComplete="new-password"
            ref={register({ required: true })}
            error={!!errors?.email}
          />
          <InputError>
            {errors?.passwordConfirm?.type === 'required' &&
              'Password confirm is required.'}
          </InputError>
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            ref={register({ required: true })}
            error={!!errors?.email}
          />

          <InputError>
            {errors?.fullName?.type === 'required' && 'Full name is required.'}
          </InputError>
        </InputWrapper>
        <Button disabled={loading} fill="true" size="big">
          {loading ? 'Loading...' : 'Sign Up'}
        </Button>
        <LayoutSpacer height="10px" />
        <LayoutBetween>
          <div></div>
          <Link to="/login">Back to log in</Link>
        </LayoutBetween>
      </Form>
    </LayoutCenter>
  </>
);

export default SignupPresenter;
