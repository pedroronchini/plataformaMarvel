import styled from 'styled-components';

export const Img = styled.img`
  position: absolute;
  width: 50%;
  right: 0;
  top: 0;
  opacity: 0.3;
  z-index: 2;

  @media screen and (max-width: 660px) {
    width: 100%;
  }
`;