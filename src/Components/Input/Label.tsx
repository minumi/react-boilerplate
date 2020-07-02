import React, { LabelHTMLAttributes } from 'react';
import styled from '../../typed-components';

const Container = styled.label`
  font-size: 14px;
  font-weight: 300;
  margin-bottom: 5px;
`;

interface IProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const Label: React.SFC<IProps> = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

export default Label;
