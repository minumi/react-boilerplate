import React, { HTMLAttributes } from 'react';
import styled from '../../typed-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

interface IProps extends HTMLAttributes<HTMLDivElement> {}

const InputWrapper: React.SFC<IProps> = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

export default InputWrapper;
