import styled from "styled-components";

export const DivContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MainLoad = styled.main`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DivVulpix = styled.div`
  position: relative;
  animation-duration:2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;


animation-name: animacaoVulpix ;

@keyframes animacaoVulpix {
  0%, 100% {
    transform: scale(1);
    left: 0px;
  }
  25% {
    transform: scale(1.4);
    left: 120px;
    z-index: 1;
  }
  50% {
    transform: scale(1);
    left: 200px;
  }
  75% {
    transform: scale(0.4);
    left: 80px;
    z-index: 0;
  }
 
}
`
export const ImgVulpix = styled.img`
  
    width: 100%;
    object-fit: contain;
`

export const DivCharmander = styled.div`
  background-color : transparent;
  position: relative;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-name: animacaoCharmander;

@keyframes animacaoCharmander {
  0%, 100% {
    transform: scale(1);
    right: 0px;
    
  }
  25% {
    transform: scale(0.4);
    right: 80px;
    z-index: 0;
  }
  50% {
    transform: scale(1);
    right: 160px;
  }
  75% {
    transform: scale(1.4);
    right: 80px;
    z-index: 1;
  }
  
}


`
export const ImgCharmander = styled.img`
    width: 100%;
    object-fit: contain;
`



