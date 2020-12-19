import styled from 'styled-components';

export const StyledScrollToTop = styled.span`
  position: fixed;
  right: 1em;
  display: inline-block;
  bottom: 1em;
  align-items: center;
  height: 2em;
  width: 2em;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  transition: opacity 1s;
  opacity: 1;
  svg {
    height: 2em;
    width: 2em;
    fill: black;
    stroke-width: 19px;
    stroke: yellow;
  }
  &:hover {
    animation: shake 0.3s linear infinite;
  }

  &.active {
    animation: liftup 1s;
  }

  @keyframes liftup {
    0% {
      transform: translateY(-20px);
    }
    30% {
      transform: translateY(-10vh);
    }
    100% {
      transform: translateY(-80vh);
    }
  }
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;
