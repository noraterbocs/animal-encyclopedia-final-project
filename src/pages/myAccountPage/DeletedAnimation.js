import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export const DeletedAnimation = () => {
  return (
    <Player
      autoplay
      className="loading"
      src="https://assets9.lottiefiles.com/packages/lf20_aimunqmw.json"
      speed={1}
      style={{
        position: 'absolute',
        zIndex: '10',
        height: '300px',
        width: '300px',
        top: '50%',
        left: '0',
        right: '0',
        margin: 'auto',
        transform: 'translateY(-50%)'
      }}
      background="transparent" />
  );
}
