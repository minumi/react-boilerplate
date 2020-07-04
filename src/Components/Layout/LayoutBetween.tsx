import React, { HTMLAttributes } from 'react';
import styled from '../../typed-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface IProps extends HTMLAttributes<HTMLDivElement> {}

const LayoutBetween: React.SFC<IProps> = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

export default LayoutBetween;
