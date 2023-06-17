import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export const Animation = ({ src, size, top, loop, inLine, position }) => {
  return (
    <Player
      loop={loop}
      autoplay
      src={src}
      speed={1}
      style={{
        position,
        zIndex: '10',
        height: size,
        width: size,
        top,
        left: inLine ? 'auto' : '0',
        right: inLine ? 'auto' : '0',
        margin: 'auto',
        transform: inLine ? 'auto' : 'translateY(-50%)'
      }}
      background="transparent" />
  );
}
