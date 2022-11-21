import React from 'react';
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

interface Props {
  instagramData: any;
}

const InstagramProfile = ({ instagramData }: Props) => {
  console.log(instagramData);
  return <StyledInstagramProfileWrapper>InstagramProfile</StyledInstagramProfileWrapper>;
};

export default InstagramProfile;
