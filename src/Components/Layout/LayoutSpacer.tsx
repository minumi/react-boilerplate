import React, { HTMLAttributes } from 'react';
import styled from '../../typed-components';

const Container = styled.div`
  width: 100%;
  height: ${(props: IProps) => props.height};
`;

interface IProps extends HTMLAttributes<HTMLDivElement> {
  height?: string;
}

const LayoutSpacer: React.SFC<IProps> = ({ ...props }) => (
  <Container {...props} height={props.height || '30px'}></Container>
);

export default LayoutSpacer;
