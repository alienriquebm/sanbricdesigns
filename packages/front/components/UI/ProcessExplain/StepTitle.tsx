import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 24px;
`;
const StyledPrefixText = styled.div`
  display: flex;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.primary500};
  color: white;
  font-size: 12px;
  height: 18px;
  width: 18px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
const StyledTitle = styled.div`
  color: ${({ theme }) => theme.colors.gray400};
  font-size: 16px;
  font-weight: bold;
`;

interface Props {
  prefixText: string | number;
  children: React.ReactNode;
  className?: string;
}
const StepTitle = ({ prefixText, children, className }: Props) => {
  return (
    <StyledWrapper className={className}>
      <StyledPrefixText>{prefixText}</StyledPrefixText>
      <StyledTitle>{children}</StyledTitle>
    </StyledWrapper>
  );
};

export default StepTitle;
