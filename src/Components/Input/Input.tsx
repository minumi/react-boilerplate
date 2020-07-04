import styled, { css } from '../../typed-components';

interface IProps {
  error?: boolean;
}

const Input = styled.input<IProps>`
  -webkit-appearance: none;
  padding: 3px 10px 0;
  min-height: 40px;
  font-size: 16px;
  font-weight: 300;
  border-radius: 0;
  border: 1px solid ${(props) => props.theme.border};
  transition: border-color 0.2s ease-in-out;
  -webkit-box-shadow: 0 0 0 1000px white inset !important;
  outline: none;
  &:focus,
  &:active {
    border-color: ${(props) => props.theme.light};
  }
  &:disabled {
    border: none;
    cursor: not-allowed;
    background-color: ${(props) => props.theme.disabled};
  }
  ${(props) =>
    props.error === true &&
    css`
      border-color: ${props.theme.error};
      &:focus,
      &:active {
        border-color: ${props.theme.error};
      }
    `}
`;

export default Input;
