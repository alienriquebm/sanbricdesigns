import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.primary500};
`;

interface Props {
  children: React.ReactNode;
}

const TextTitle = ({ children }: Props) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default TextTitle;
