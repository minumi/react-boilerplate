import React, { FormHTMLAttributes } from 'react';
import styled, { css } from '../../typed-components';

const Container = styled.form`
  ${(props) =>
    props.className === 'login-form' &&
    css`
      max-width: 300px;
    `};
  min-width: 300px;
`;

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
  onSubmit?: any;
}

const InputWrapper: React.SFC<IProps> = ({ onSubmit, children, ...props }) => (
  <Container
    {...props}
    onSubmit={(e) => {
      e.preventDefault();
      if (onSubmit) {
        onSubmit();
      }
    }}
  >
    {children}
  </Container>
);

export default InputWrapper;
