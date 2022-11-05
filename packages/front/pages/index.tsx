import styled from 'styled-components';

const StyledWrapper = styled.div`
  color: ${({ theme }) => theme.colors.gray400};
`;

export default function Home() {
  return <StyledWrapper>Sanbric designs new app</StyledWrapper>;
}
