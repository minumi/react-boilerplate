import React, { FormEvent, ChangeEvent } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '../../Components/Button';
import { Form } from '../../Components/Form';
import { Input, InputWrapper, Label } from '../../Components/Input';
import {
  LayoutCenter,
  LayoutSpacer,
  LayoutBetween,
} from '../../Components/Layout';
import { Link } from '../../Components/Link';

interface IProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
}
const SignupPresenter: React.SFC<IProps> = ({
  onSubmit,
  onChange,
  loading,
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
            type="text"
            autoComplete="email"
            onChange={onChange}
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            autoComplete="new-password"
            onChange={onChange}
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="passwordConfirm">Password Confirm</Label>
          <Input
            id="passwordConfirm"
            type="password"
            autoComplete="new-password"
            onChange={onChange}
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            type="name"
            autoComplete="name"
            onChange={onChange}
          />
        </InputWrapper>
        <Button disabled={loading} fill={true} size={'big'}>
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
