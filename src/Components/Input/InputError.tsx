import styled from '../../typed-components';

const InputError = styled.p`
  margin: 7px auto 0;
  width: 100%;
  text-align: left;
  font-size: 15px;
  color: ${(props) => props.theme.error};
`;

export default InputError;
