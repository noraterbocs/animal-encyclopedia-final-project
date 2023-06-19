import React from 'react';
import BackgroundSVG from '../../assets/background/plainmapwithoutsea.svg'

export const BackgroundMap = () => {
  return <img style={{ filter: 'drop-shadow(0 0 1rem #000)', bgcolor: '#4facebfc', width: '100%', zIndex: -1, height: '100%', margin: '0 !important', padding: '0 !important' }} src={BackgroundSVG} alt="Map" />
};