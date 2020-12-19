import styled from 'styled-components';

const StyledSlider = styled.div`
  width: calc(100vw - 200px - 13em);
  height: calc((100vw - 200px - 13em) / 1.7);
  max-width: 1050px;
  max-height: calc(1050px / 1.7);
  @media (max-width: 979px) {
    width: calc(100vw - 140px);
    height: calc((100vw - 140px) / 1.7);
  }
  overflow: hidden;
  text-align: center;
  position: relative;
  display: flex;
  margin: 0 auto;
  .slider__container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /*opacity: 0;*/
    transition: opacity 0.6s ease-in, transform 0.3s ease-in;

    &.activeSlide {
      opacity: 1;
      z-index: 5;
      transform: translateX(0);
    }

    &.nextSlide {
      opacity: 0;
      transform: translateX(100%);
    }

    &.lastSlide {
      opacity: 0;
      transform: translateX(-100%);
    }

    .gatsby-image-wrapper {
      max-height: 100%;
      padding-top: 5px;
    }
  }
  .nav__container {
    z-index: 99;
    width: 100%;
    button {
      z-index: 99;
      transform: translateY(-50%);
      position: absolute;
      top: 50%;
      right: 0;
      padding: 0;
      line-height: 31px;
      &.nav__prev {
        left: 0;
      }
    }
  }
`;

export default StyledSlider;
