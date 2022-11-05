import React from 'react';
import styled from 'styled-components';
import Mountain from '@assets/images/snowym.svg';
import Image from 'next/image';

const MainHeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const StyledTitle = styled.div`
  padding: 32px;
  width: 100%;
  text-align: center;
  font-size: 32px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary500};
`;

const StyledImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: fit-content;
  bottom: 0;
`;

const MainHero = () => {
  return (
    <MainHeroWrapper>
      <StyledTitle>WELCOME TO THE DESIGN FACTORY</StyledTitle>
      <StyledImage src={Mountain} alt='mountains' />
    </MainHeroWrapper>
  );
};

export default MainHero;
