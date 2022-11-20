import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import SmallLogo from '@assets/images/logo_image.png';

const StyledNavbarWrapper = styled.div`
  height: 64px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary200};
  display: flex;
  align-items: center;
  padding: 12px;
  position: fixed;
  width: 100%;
  background: ${({ theme }) => theme.colors.gray50};
  z-index: 1;
`;

const StyledLogoWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;
const StyledLogoWords = styled.div`
  font-family: 'MrEaves';
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray400};
`;

const StyledSmallLogo = styled(Image)`
  height: 100%;
  object-fit: contain;
  width: fit-content;
`;

const Navbar = () => {
  return (
    <StyledNavbarWrapper>
      <StyledLogoWrapper>
        <StyledSmallLogo src={SmallLogo} alt='logo' />
        <StyledLogoWords>Sanbric Designs</StyledLogoWords>
      </StyledLogoWrapper>
    </StyledNavbarWrapper>
  );
};

export default Navbar;
