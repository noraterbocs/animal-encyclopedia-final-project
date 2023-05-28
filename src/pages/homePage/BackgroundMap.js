import React from 'react';
import BackgroundSVG from '../../assets/background/mapwithoutanimals.svg'

export const BackgroundMap = () => {
  return <img style={{ overFlow: 'scroll', width: '1000px', zIndex: -1 }} src={BackgroundSVG} alt={Map} />
};