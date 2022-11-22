import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  variant?: 'dark' | 'light';
}

const StyledTitle = styled.div<TitleProps>`
  font-size: 32px;
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 24px;
  color: ${({ theme, variant }) => (variant === 'dark' ? 'white' : theme.colors.primary500)};
  text-transform: uppercase;
`;

interface Props {
  children: React.ReactNode;
}

const TextTitle = ({ children, variant = 'light' }: Props & TitleProps) => {
  return <StyledTitle variant={variant}>{children}</StyledTitle>;
};

export default TextTitle;
