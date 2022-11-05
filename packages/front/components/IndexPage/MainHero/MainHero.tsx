import React from 'react';
import styled from 'styled-components';

const MainHeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const StyledTitle = styled.div`
  margin-top: 30px;
  width: 100%;
  text-align: center;
  font-size: 24px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primary500};
`;
const MainHero = () => {
  return (
    <MainHeroWrapper>
      <StyledTitle>WELCOME TO THE DESIGN FACTORY</StyledTitle>
    </MainHeroWrapper>
  );
};

export default MainHero;
