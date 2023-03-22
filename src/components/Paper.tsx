import styled from 'styled-components';

interface PaperProps {
  width?: string;
  height?: string;
  borderRadius?: string;
}

const Paper = styled.div<PaperProps>`
  border-radius: ${({ theme, borderRadius }) =>
    borderRadius ? borderRadius : theme.paperRadius};
  background-color: ${({ theme }) => theme.paperBackground};
  padding-inline: 40px;
  padding-top: 40px;
  padding-bottom: 40px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export default Paper;
