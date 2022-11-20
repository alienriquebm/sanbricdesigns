import React from 'react';
import Navbar from '@components/Navbar';
import styled from 'styled-components';
import useIsMainHeroOutside from 'hooks/useIsMainHeroOutside';
import MainHero from '@components/IndexPage/MainHero';

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledContentWrapper = styled.div`
  background-color: white;
  padding-top: 100px;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isMainHeroOutside } = useIsMainHeroOutside();

  return (
    <StyledWrapper>
      {isMainHeroOutside && <Navbar />}
      <MainHero />
      <StyledContentWrapper>{children}</StyledContentWrapper>
    </StyledWrapper>
  );
};

export default Layout;
