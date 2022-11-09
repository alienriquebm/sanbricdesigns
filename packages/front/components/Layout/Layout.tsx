import React from 'react';
import Navbar from '@components/Navbar';
import styled from 'styled-components';
import useIsMainHeroOutside from 'hooks/useIsMainHeroOutside';

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isMainHeroOutside } = useIsMainHeroOutside();

  return (
    <StyledWrapper>
      {isMainHeroOutside && <Navbar />}
      {children}
    </StyledWrapper>
  );
};

export default Layout;
