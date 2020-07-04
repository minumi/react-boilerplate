import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from '../../typed-components';

interface IButtonProps {
  fill: number;
  size: TButtonSize;
}

const Container = styled.button`
  color: ${(props) => props.theme.primary0};
  border: 1px solid ${(props) => props.theme.primary0};
  background-color: ${(props) => props.theme.primary8};
  min-width: 100px;
  padding: 10px 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  outline: none;
  transition: background 0.2s ease-in-out;
  height: ${(props: IButtonProps) => {
    if (props.size === 'big') {
      return '50px';
    }
    if (props.size === 'small') {
      return '30px';
    }
    return '40px';
  }};
  ${(props: IButtonProps) =>
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

type TButtonSize = 'small' | 'normal' | 'big';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fill?: boolean;
  size?: TButtonSize;
}

const Button: React.SFC<IProps> = ({ children, ...props }) => (
  <Container {...props} fill={props.fill ? 1 : 0} size={props.size || 'normal'}>
    {children}
  </Container>
);

export default Button;
