
import styled from 'styled-components';

export const BackgroundImage = styled('img')({
  position: 'fixed',
  minHeight: '100vh',
  height: '100%',
  width: '100%',
  top: '0px',
  left: '0px',
  zIndex: '-2',
  opacity: '0.7',
  objectFit: 'cover'
});
