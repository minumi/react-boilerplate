import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from '../../typed-components';

const Container = styled.button`
  color: ${(props) => props.theme.primary0};
  border: 1px solid ${(props) => props.theme.primary0};
  background-color: ${(props) => props.theme.primary8};
  min-width: 100px;
  min-height: 30px;
  padding: 10px 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  outline: none;
  transition: background 0.2s ease-in-out;
  ${(props: { fill: number }) =>
    props.fill &&
    css`
      width: 100%;
    `}
  &:hover,
  &:active {
    background-color: ${(props) => props.theme.primary9};
  }
  &:disabled {
    border: none;
    background-color: gray;
    cursor: not-allowed;
  }
`;

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fill?: boolean;
}

const Button: React.SFC<IProps> = ({ children, ...props }) => (
  <Container {...props} fill={props.fill ? 1 : 0}>
    {children}
  </Container>
);

export default Button;
