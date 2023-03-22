import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  level?: 1 | 2 | 3 | 4 | 5;
  color?: 'primary' | 'text' | 'textParagraph';
  align?: 'center' | 'left' | 'right';
  children: React.ReactNode;
}

type TitleCSSProps = Exclude<TitleProps, 'level' | 'children'>;

const H1 = styled.h1<TitleCSSProps>`
  font-size: 48px;
  font-weight: 800;
  text-transform: uppercase;
  text-align: ${({ align }) => align};
  color: ${({ theme, color }) => {
    if (color) return theme[color];

    return theme.text;
  }};
`;

const H2 = styled.h2<TitleCSSProps>`
  font-size: 32px;
  font-weight: 500;
  text-align: ${({ align }) => align};
  text-transform: uppercase;
  color: ${({ theme, color }) => {
    if (color) return theme[color];

    return theme.text;
  }};
`;

const H3 = styled.h2<TitleCSSProps>`
  font-size: 24px;
  font-weight: 600;
  text-align: ${({ align }) => align};
  color: ${({ theme, color }) => {
    if (color) return theme[color];

    return theme.text;
  }};
`;

const H4 = styled.h2<TitleCSSProps>`
  font-size: 18px;
  font-weight: 500;
  text-align: ${({ align }) => align};
  text-transform: uppercase;
  color: ${({ theme, color }) => {
    if (color) return theme[color];

    return theme.text;
  }};
`;

const H5 = styled.h2<TitleCSSProps>`
  font-size: 16px;
  font-weight: 500;
  text-align: ${({ align }) => align};
  text-transform: uppercase;
  color: ${({ theme, color }) => {
    if (color) return theme[color];

    return theme.text;
  }};
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.textParagraph};
  font-size: 18px;
  line-height: 26px;
`;

const Title = ({ level, children, ...props }: TitleProps) => {
  switch (level) {
    case 1:
      return <H1 {...props}>{children}</H1>;
    case 2:
      return <H2 {...props}>{children}</H2>;
    case 3:
      return <H3 {...props}>{children}</H3>;
    case 4:
      return <H4 {...props}>{children}</H4>;
    case 5:
      return <H5 {...props}>{children}</H5>;
    default:
      return <H1 {...props}>{children}</H1>;
  }
};

const Typography = {
  Title,
  Paragraph,
};

export default Typography;
