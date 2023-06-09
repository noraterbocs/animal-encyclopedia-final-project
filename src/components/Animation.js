import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export const Animation = ({ src, size, top, loop, inLine, animationRef, autoplay }) => {
  return (
    <Player
      loop={loop}
      autoplay={autoplay || true}
      ref={animationRef}
      src={src}
      speed={1}
      style={{
        position: inLine ? 'relative' : 'absolute',
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
