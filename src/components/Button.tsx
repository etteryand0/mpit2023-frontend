import { Theme } from '@/styles/theme';
import styled from 'styled-components';

interface ButtonProps {
  size?: 'large' | 'small';
  color?: keyof Theme;
}

const Button = styled.button<ButtonProps>`
  background-color: ${({ theme, color }) =>
    color ? theme[color] : theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 20px 65px;
  border-radius: 100vw;
  font-size: 20px;
  --webkit-appearance: button;
  border: 1px solid transparent;

  outline: none;
  position: relative;
  display: inline-block;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;

  &:hover {
    opacity: 0.9;
  }
`;

export default Button;
