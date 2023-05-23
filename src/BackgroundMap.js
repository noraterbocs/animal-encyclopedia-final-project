import React from 'react';
import styled from 'styled-components/macro';
import BackgroundSVG from './assets/background/map.svg'

export const BackgroundMap = () => {
  return <BackgroundImg />;
};

const BackgroundImg = styled.div`
   background-image:linear-gradient(rgba(250, 250, 250, 0.5), rgba(250, 250, 250, 0.5)), url(${BackgroundSVG});
   background-size:cover;
    width:100%;
    height:100%;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    z-index: -1;
`
