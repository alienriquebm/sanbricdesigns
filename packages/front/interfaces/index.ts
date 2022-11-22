import { StaticImageData } from 'next/image';

export interface ProcessStep {
  title: string;
  description: string;
  image: StaticImageData;
}

export interface Service {
  title: string;
  description: string;
  image: StaticImageData;
}

export interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
}
