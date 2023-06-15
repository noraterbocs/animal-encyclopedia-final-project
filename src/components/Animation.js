import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export const Animation = ({ src, size, top, loop }) => {
  return (
    <Player
      loop={loop}
      autoplay
      className="deleted"
      src={src}
      speed={1}
      style={{
        position: 'absolute',
        zIndex: '10',
        height: size,
        width: size,
        top,
        left: '0',
        right: '0',
        margin: 'auto',
        transform: 'translateY(-50%)'
      }}
      background="transparent" />
  );
}
