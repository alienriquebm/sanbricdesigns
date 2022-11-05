import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Layout;
