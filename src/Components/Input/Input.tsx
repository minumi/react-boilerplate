import React, { InputHTMLAttributes } from 'react';
import styled from '../../typed-components';

const Container = styled.input`
  padding-top: 3px;
  padding-left: 5px;
  min-height: 35px;
  font-size: 16px;
  font-weight: 300;
  border-radius: 0;
  border: 1px solid ${(props) => props.theme.primary6};
  transition: border-color 0.2s ease-in-out;
  outline: none;
  &:focus,
  &:active {
    border-color: ${(props) => props.theme.primary7};
  }
  &:disabled {
    border: none;
    cursor: not-allowed;
    background-color: ${(props) => props.theme.primary3};
  }
`;

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.SFC<IProps> = ({ ...props }) => <Container {...props} />;

export default Input;
