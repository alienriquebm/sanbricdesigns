import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import ImageGallery from 'react-image-gallery';
import Mountain from '@assets/images/snowym.svg';
import Clouds1 from '@assets/images/clouds1.png';
import Clouds2 from '@assets/images/clouds2.png';
import Clouds3 from '@assets/images/clouds3.png';
import Clouds4 from '@assets/images/clouds4.png';
import Image from 'next/image';
import useScrollPosition from 'hooks/useScrollPosition';

const MainHeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  @keyframes moveClouds {
    0% {
      transform: translateX(calc(100vw + 100px));
    }

    100% {
      transform: translateX(calc(-100vw + 100px));
    }
  }

  #clouds {
    background: white;

    & path {
      fill: #8b8783;
    }
  }
`;

const StyledTitle = styled.div`
  padding: 32px;
  width: 100%;
  text-align: center;
  font-size: 32px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary500};
  text-transform: uppercase;
  & span {
    color: ${({ theme }) => theme.colors.primary500};
    font-weight: 600;
  }
`;

const StyledMountain = styled(Mountain)`
  position: absolute;
  width: 100%;
  height: fit-content;
  bottom: 0;
`;

const StyledGalleryWrapper = styled.div`
  position: absolute;
  width: 100%;
  & img {
    height: 265px;
  }
  top: calc((100vh / 2) - 225px);
  z-index: -1;
  transition: transform 0.1s ease;
`;

const CloudsConfiguration = css`
  width: 300px;
  height: fit-content;
  position: absolute;
  z-index: 1;
  transition: transform 0.5s ease;
  opacity: 0.5;
`;

const StyledCloudImage1 = styled(Image)`
  ${CloudsConfiguration}
  animation: moveClouds 70s linear infinite;
  bottom: 18px;
`;

const StyledCloudImage2 = styled(Image)`
  ${CloudsConfiguration}
  animation: moveClouds 100s linear infinite;
  bottom: 138px;
`;

const StyledCloudImage3 = styled(Image)`
  ${CloudsConfiguration}
  z-index: -3;
  animation: moveClouds 160s linear infinite;
  bottom: 262px;
`;

const StyledCloudImage4 = styled(Image)`
  ${CloudsConfiguration}
  width: 650px;
  animation: moveClouds 160s linear infinite;
  bottom: 40px;
`;

const StyledCloudStaticImage1 = styled(Image)`
  ${CloudsConfiguration}
  opacity: 0.7;
  left: 72px;
  top: 384px;
`;

const StyledCloudStaticImage2 = styled(Image)`
  ${CloudsConfiguration}
  opacity: 0.7;
  right: 72px;
  bottom: 110px;
`;

const images = [
  {
    original: 'assets/images/logo.png',
    thumbnail: 'assets/images/logo.png',
  },
  {
    original: 'assets/images/carousel/1.png',
    thumbnail: 'assets/images/carousel/1.png',
  },
  {
    original: 'assets/images/carousel/2.png',
    thumbnail: 'assets/images/carousel/2.png',
  },
  {
    original: 'assets/images/carousel/3.png',
    thumbnail: 'assets/images/carousel/3.png',
  },
  {
    original: 'assets/images/carousel/4.png',
    thumbnail: 'assets/images/carousel/4.png',
  },
  {
    original: 'assets/images/carousel/5.png',
    thumbnail: 'assets/images/carousel/5.png',
  },
  {
    original: 'assets/images/carousel/6.png',
    thumbnail: 'assets/images/carousel/6.png',
  },
];

const MainHero = () => {
  const mainWrapperRef = useRef<HTMLDivElement | null>(null);
  const { yScrollPosition } = useScrollPosition();
  const transformCondition =
    yScrollPosition &&
    yScrollPosition > 0 &&
    mainWrapperRef &&
    mainWrapperRef.current &&
    yScrollPosition <= mainWrapperRef.current.getBoundingClientRect().height;
  return (
    <MainHeroWrapper ref={mainWrapperRef}>
      <StyledTitle>
        Welcome to the <span>design factory</span>
      </StyledTitle>
      <StyledGalleryWrapper style={{ transform: transformCondition ? `translateY(${yScrollPosition / 2}%)` : 'none' }}>
        <ImageGallery
          items={images}
          showNav={false}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay
          slideInterval={7000}
        />
      </StyledGalleryWrapper>
      <StyledCloudStaticImage1 src={Clouds1} alt='clouds1' />
      <StyledCloudImage1 src={Clouds1} alt='clouds1' />
      <StyledCloudStaticImage2 src={Clouds2} alt='clouds2' />
      <StyledCloudImage2 src={Clouds2} alt='clouds2' />
      <StyledCloudImage3 src={Clouds3} alt='clouds3' />
      <StyledCloudImage4 src={Clouds4} alt='clouds4' />
      <StyledMountain />
    </MainHeroWrapper>
  );
};

export default MainHero;
