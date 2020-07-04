import styled, { css } from '../../typed-components';

type TButtonSize = 'small' | 'normal' | 'big';

interface IButtonProps {
  fill?: 'true' | 'false';
  size?: TButtonSize;
}

const Button = styled.button<IButtonProps>`
  color: ${(props) => props.theme.background};
  border: 1px solid ${(props) => props.theme.background};
  background-color: ${(props) => props.theme.color};
  min-width: 100px;
  padding: 10px 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  outline: none;
  transition: background 0.2s ease-in-out;
  height: ${(props) => {
    if (props.size === 'big') {
      return '50px';
    } else if (props.size === 'small') {
      return '30px';
    }
    return '40px';
  }};
  ${(props: IButtonProps) =>
    props.fill === 'true' &&
    css`
      width: 100%;
    `}
  &:hover,
  &:active {
    background-color: ${(props) => props.theme.dark};
  }
  &:disabled {
    border: none;
    background-color: gray;
    cursor: not-allowed;
  }
`;

export default Button;
