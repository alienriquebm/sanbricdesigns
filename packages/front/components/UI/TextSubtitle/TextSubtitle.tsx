import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 50px;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.colors.gray400};
`;

interface Props {
  children: React.ReactNode;
}

const TextSubtitle = ({ children }: Props) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default TextSubtitle;
