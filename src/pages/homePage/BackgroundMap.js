import React from 'react';
import BackgroundSVG from '../../assets/background/plainmapwithoutsea.svg'

export const BackgroundMap = () => {
  return <img style={{ overFlow: 'scroll', width: '1200px', zIndex: -1, borderRadius: '25%' }} src={BackgroundSVG} alt="Map" />
};