import React from 'react';
import TextTitle from '@components/UI/TextTitle';
import useGetInstagramProfile from 'hooks/api/useGetInstagramProfile';
import Image from 'next/image';
import styled from 'styled-components';

const StyledInstagramProfileWrapper = styled.div`
  width: 100%;
  background-image: linear-gradient(
      #8b8783,
      rgba(139, 135, 131, 0.5),
      rgba(139, 135, 131, 0.4),
      rgba(139, 135, 131, 0.5),
      #8b8783,
      #8b8783
    ),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpolygon fill='%23000' fill-opacity='.1' points='120 0 120 60 90 30 60 0 0 0 0 0 60 60 0 120 60 120 90 90 120 60 120 0'/%3E%3C/svg%3E");
  background-size: cover;
  padding: 100px 20% 100px 20%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  &::before {
    position: absolute;
    content: '';
    pointer-events: none;
    left: 50%;
    width: 100px;
    height: 100px;
    transform: translateX(-100%) rotate(45deg) translateY(-70%);
    background: white;
    top: 0;
  }
`;

const StyledSubtitle = styled.div`
  color: white;
  text-align: center;
`;

const StyledWrapperImages = styled.div`
  margin-top: 48px;
  width: 100%;
  gap: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  border: 3px solid ${({ theme }) => theme.colors.primary500};
  border-radius: 4px;
`;

const InstagramProfile = () => {
  const { data } = useGetInstagramProfile();

  return (
    <StyledInstagramProfileWrapper>
      <TextTitle variant='dark'>Our last updates on instagram</TextTitle>
      <StyledSubtitle>
        Keep in touch with our last post on Instagram. We promise you will enjoy seeing our last jobs, artistic designs,
        tips and more (yes, even fun! yey!)
      </StyledSubtitle>
      <StyledWrapperImages>
        {data &&
          data.length &&
          data
            ?.slice(0, 10)
            .map(item => (
              <StyledImage src={item.media_url} key={item.id} alt={item.caption} width={100} height={100} />
            ))}
      </StyledWrapperImages>
    </StyledInstagramProfileWrapper>
  );
};

export default InstagramProfile;
