import React from 'react';
import BackgroundSVG from '../../assets/background/plainmapwithoutsea.svg'

export const BackgroundMap = () => {
  return <img style={{ bgcolor: '#4facebfc', overFlow: 'scroll', width: '800px', zIndex: -1, height: '100%' }} src={BackgroundSVG} alt="Map" />
};