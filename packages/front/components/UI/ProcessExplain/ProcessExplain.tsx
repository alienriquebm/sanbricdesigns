import React from 'react';
import { ProcessStep } from 'interfaces';
import styled from 'styled-components';
import Image from 'next/image';
import { Slide } from 'react-awesome-reveal';
import StepTitle from './StepTitle';

interface InnerProps {
  $isEvenNumber: boolean;
}

const StyledWrapper = styled.div`
  display: flex;
  gap: 100px;
  flex-direction: column;
`;

const StyledStepWrapper = styled.div`
  display: flex;
  height: 112px;
  gap: 64px;
`;
const StyledTextWrapper = styled.div<InnerProps>`
  order: ${({ $isEvenNumber }) => ($isEvenNumber ? 2 : 'initial')};
`;
const StyledDescription = styled.div<InnerProps>`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray400};
  text-align: ${({ $isEvenNumber }) => ($isEvenNumber ? 'right' : 'initial')};
`;

const StyledImage = styled(Image)<InnerProps>`
  height: 100%;
  width: min-content;
  order: ${({ $isEvenNumber }) => ($isEvenNumber ? 1 : 'initial')};
`;

const StyledStepTitle = styled(StepTitle)<InnerProps>`
  justify-content: ${({ $isEvenNumber }) => ($isEvenNumber ? 'flex-end' : 'initial')};
`;

interface Props {
  processSteps: ProcessStep[];
}

const ProcessExplain = ({ processSteps }: Props) => {
  return (
    <StyledWrapper>
      {processSteps.map((step: ProcessStep, index) => {
        const i = index;
        const isEvenNumber = i % 2 === 0;
        return (
          <Slide triggerOnce direction={isEvenNumber ? 'left' : 'right'} key={i}>
            <StyledStepWrapper>
              <StyledTextWrapper $isEvenNumber={isEvenNumber}>
                <StyledStepTitle prefixText={i + 1} $isEvenNumber={isEvenNumber}>
                  {step.title}
                </StyledStepTitle>
                <StyledDescription $isEvenNumber={isEvenNumber}>{step.description}</StyledDescription>
              </StyledTextWrapper>
              <StyledImage alt={step.title} src={step.image} $isEvenNumber={isEvenNumber} />
            </StyledStepWrapper>
          </Slide>
        );
      })}
    </StyledWrapper>
  );
};

export default ProcessExplain;
