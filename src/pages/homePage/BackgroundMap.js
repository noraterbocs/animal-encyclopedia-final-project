import React from 'react';
import styled from 'styled-components/macro';
import BackgroundSVG from '../../assets/background/testing2map.svg'

export const BackgroundMap = () => {
  return <BackgroundImg />;
};

const BackgroundImg = styled.div`
    background-image:url(${BackgroundSVG});
    background-size:cover;
    width:100%;
    height:100vh;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    z-index: -1;
`
