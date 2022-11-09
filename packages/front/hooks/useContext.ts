/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import constate from 'constate';
import { useRef } from 'react';

export const _useContext = () => {
  const mainHeroRef = useRef<HTMLDivElement | null>(null);

  return {
    mainHeroRef,
  };
};

const [ContextProvider, useContext, useMainHeroRef] = constate(
  _useContext,
  value => value,
  value => ({ mainHeroRef: value.mainHeroRef })
);

export { ContextProvider, useContext, useMainHeroRef };
