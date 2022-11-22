import React from 'react';
import TextTitle from '@components/UI/TextTitle';
import styled from 'styled-components';
import ServiceCard from '@components/UI/ServiceCard';
import IconSocialMedia from '@assets/images/icon-socialmedia.png';
import IconDevelopment from '@assets/images/icon-development.png';
import IconMotion from '@assets/images/icon-motion.png';
import IconPostproduction from '@assets/images/icon-postproduction.png';
import IconPrinted from '@assets/images/icon-printed.png';

import { Service } from 'interfaces';

const StyledOtherServicesWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 150px;
  padding-left: 50px;
  padding-right: 50px;
  background-image: linear-gradient(white, rgba(255, 255, 255, 0), white, white),
    url('assets/images/other-services.bg.jpg');
`;

const StyledSectionSubtitle = styled.div`
  color: ${({ theme }) => theme.colors.gray400};
`;

const StyledServiceCardWrapper = styled.div`
  width: 100%;
  margin-top: 64px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 32px;
`;

const services = [
  {
    title: 'Social Media Design & Management',
    description:
      'Do you need to manage your social media networks? Here we are for you. Our team can fully manage your account, doing the designs and posting for you using useful content that is according with your brand.',
    image: IconSocialMedia,
  },
  {
    title: 'Development Services',
    description:
      'Do you have already your webpage done or app? We have the best developers that are ready to code in the best programming languages of last generation. Our technologies are NodeJS, React, Angular MongoDB and much much more.',
    image: IconDevelopment,
  },
  {
    title: 'Motion Graphics Design',
    description:
      'Great graphics and incredibles videos... We can do this spot or commercial that you need, intro for youtubers, logo reveals, presentations and video explainers. We use the best powerful tools to do this motion video that you business need!',
    image: IconMotion,
  },
  {
    title: 'Pre & Post Production Services',
    description:
      "Don't post or publish these videos in raw format on your social media or youtube channel. We do the masterization for you, we adjust the audio, add music, graphic filters, composition and anything that this video looks great!",
    image: IconPostproduction,
  },
  {
    title: 'Printed Media Design',
    description:
      'Brochures, corporate folders, books, flyers, newspappers, contact cards and anything that you can imagine or need for your brand, we design it. Our designers use carefully your brand design guidelines in order to bring to you the best printed media designs.',
    image: IconPrinted,
  },
] as Service[];

const OtherServices = () => {
  return (
    <StyledOtherServicesWrapper>
      <TextTitle>Our other services</TextTitle>
      <StyledSectionSubtitle>Check it out the other great services that we have for you</StyledSectionSubtitle>
      <StyledServiceCardWrapper>
        {services.map((service, index) => {
          const i = index;
          return (
            <ServiceCard title={service.title} image={service.image} key={i}>
              {service.description}
            </ServiceCard>
          );
        })}
      </StyledServiceCardWrapper>
    </StyledOtherServicesWrapper>
  );
};

export default OtherServices;
