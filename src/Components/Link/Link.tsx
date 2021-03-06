import { Link } from 'react-router-dom';
import styled from '../../typed-components';

const Container = styled(Link)`
  font-size: 15px;
  color: ${(props) => props.theme.color};
  transition: color 0.2s ease-in-out;
  &:hover,
  &:active {
    color: ${(props) => props.theme.dark};
  }
`;

export default Container;
