import React from 'react';
import styled from 'styled-components';
import BrandIdentityImg from '@assets/images/brand-identity.png';
import Image from 'next/image';
import TextTitle from '@components/UI/TextTitle';
import TextSubtitle from '@components/UI/TextSubtitle';
import ProcessExplain from '@components/UI/ProcessExplain';
import { ProcessStep } from 'interfaces';
import Step1 from '@assets/images/step-1.png';
import Step2 from '@assets/images/step-2.png';
import Step3 from '@assets/images/step-3.png';
import Step4 from '@assets/images/step-4.png';
import Step5 from '@assets/images/step-5.png';

const StyledWrapper = styled.div`
  background-color: white;
  min-height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.gray400};
  line-height: 1.5;
`;

const processSteps = [
  {
    title: 'Contact us to start',
    description:
      'Fill the form of contact and we will keep in touch with you ASAP. Also, if you want, we can be in touch through any platform of communication as Zoom or Google Meet.',
    image: Step1,
  },
  {
    title: 'Give us your ideas',
    description:
      'Tell us all about your business and ideas. Then we will start the magic. We do a extended research to ensure to do the best work for you.',
    image: Step2,
  },
  {
    title: 'Keep it up for the updates',
    description:
      'We will start the creative work using the bes techniques in order to give to you the best options for your brand.',
    image: Step3,
  },
  {
    title: 'We present you the alternatives!',
    description:
      "It's time to surprise you! We will present our work to you. All the power of originality, creativity and geniality that we put on your brand in order to blow your mind.",
    image: Step4,
  },
  {
    title: 'You pick and we are ready to go!',
    description:
      "Yes... you pick one of the alternatives that we are made to you let's make some changes that you need to look ok if you want, and we finish! We send to you all the files that you will need in order to have your brand ready to go.",
    image: Step5,
  },
] as ProcessStep[];

const BrandIdentity = () => {
  return (
    <StyledWrapper>
      <Image src={BrandIdentityImg} alt='Brand identity design' width={128} height={128} />
      <TextTitle>BRAND IDENTITY DESIGN</TextTitle>
      <StyledParagraph>
        Stop. We don&apos;t make &quot;logos&quot; or &quot;quick&quot; works. We really love what we do, and what we do
        is brand identity construction. For us, if you want create just a logo, we think you are will be ok with
        freelance services as Fiverr or Workana in order to do it. But what we do is a complete process that envolves
        create an aproppiate brand based on your business and following a infallible process to produce as a result a
        great brand guidelines that will be present on all your products and services.
      </StyledParagraph>
      <TextSubtitle>HOW DOES IT WORK</TextSubtitle>
      <ProcessExplain processSteps={processSteps} />
    </StyledWrapper>
  );
};

export default BrandIdentity;
