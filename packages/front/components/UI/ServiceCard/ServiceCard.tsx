import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';

const StyledServiceCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 24px;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  padding: 24px;
  height: 440px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  border-bottom: 5px solid ${({ theme }) => theme.colors.primary500};
  background: white;
`;
const StyledTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary500};
  text-align: center;
  height: 15%;
`;
const StyledDescription = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray400};
  text-align: left;
  flex: 1 1 auto;
`;
const StyledImage = styled(Image)`
  width: 64px;
  object-fit: contain;
  height: 100%;
`;

const StyledFooter = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

interface Props {
  title: string;
  children: React.ReactNode;
  image: StaticImageData;
}

const ServiceCard = ({ title, children, image }: Props) => {
  return (
    <StyledServiceCardWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{children}</StyledDescription>
      <StyledFooter>
        <StyledImage src={image} alt={title} />
      </StyledFooter>
    </StyledServiceCardWrapper>
  );
};

export default ServiceCard;
