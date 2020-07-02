import React, { HTMLAttributes } from 'react';
import styled from '../../typed-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IProps extends HTMLAttributes<HTMLDivElement> {}

const LayoutCenter: React.SFC<IProps> = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

export default LayoutCenter;
