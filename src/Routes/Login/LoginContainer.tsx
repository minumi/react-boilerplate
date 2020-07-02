import React from 'react';
import { Button } from '../../Components/Button';
import { InputWrapper, Input, Label } from '../../Components/Input';
import { Form } from '../../Components/Form';
import { LayoutCenter } from '../../Components/Layout';
import LayoutSpacer from '../../Components/Layout/LayoutSpacer';

const LoginContainer = () => (
  <>
    <LayoutSpacer height="50px" />
    <LayoutCenter>
      <Form className="login-form">
        <InputWrapper>
          <Label htmlFor="username">E-mail</Label>
          <Input id="username" type="text" />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </InputWrapper>
        <Button fill={true}>Login</Button>
      </Form>
    </LayoutCenter>
  </>
);

export default LoginContainer;
