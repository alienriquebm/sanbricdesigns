import { StaticImageData } from 'next/image';

export interface ProcessStep {
  title: string;
  description: string;
  image: StaticImageData;
}
