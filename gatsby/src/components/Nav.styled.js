import styled from 'styled-components';

export const StyledNav = styled.nav`
  z-index: 1;
  ul.menu,
  ul.archives,
  ul.categories {
    padding: 0;
    margin: 0;
  }

  ul.menu > li {
    list-style: none;
    position: relative;
  }

  ul.menu > li > a,
  ul.drop-down li a {
    position: relative;
    display: block;
    width: 100%;
    padding: 0.25em 0.75em 0.25em 1.25em;
    color: #d2d2d2;
    font-family: 'jura', sans-serif;
    font-size: 1.77777778em;
    line-height: 1.4375em;

    text-transform: uppercase;
    text-decoration: none;

    transition: all 0.3s linear;
  }

  ul.menu > li a:before {
    background-image: linear-gradient(
      to right,
      #a7a7a7 46%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: bottom;
    background-size: 13px 1px;
    background-repeat: repeat-x;
    width: 100%;
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 0;
    height: 1px;
    left: 1px;
    z-index: 1;
  }

  ul.menu {
    position: relative;
  }
  ul.menu:before {
    background-image: linear-gradient(
      to right,
      #a7a7a7 46%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: bottom;
    background-size: 13px 1px;
    background-repeat: repeat-x;
    width: 100%;
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    height: 1px;
    left: 0;
    z-index: 999;
  }

  ul.menu > li a[aria-current='page'],
  ul.menu > li a.active {
    background: #ffed27;
    color: black;
    border-right: 0;
    position: relative;
    height: 100%;
  }

  ul.menu > li:hover > a {
    transition: all 0.15s linear;
    background: #ffed27;
    color: black;
  }

  ul.menu > li a[aria-current='page']:after,
  ul.menu > li a.active:after {
    content: '';
    position: absolute;
    width: 1.4em;
    height: 1.4em;
    background: #ffed27;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    top: 0.26em;
    right: -0.65em;
    z-index: 0;
    box-shadow: 3px -2px 9px -1px rgba(0, 0, 0, 0.6);
    box-shadow: 7px -8px 8px -7px rgba(0, 0, 0, 0.7);
    z-index: 0;
  }

  ul.menu li a span {
    position: relative;
    z-index: 2;
  }

  ul.drop-down {
    position: absolute;
    top: 0;
    width: 220px;
    visibility: hidden;
    opacity: 0;
    z-index: 3;
    text-align: left;
    left: 100%;
    transition: all 0.17s linear;

    backface-visibility: hidden;

    transform-origin: 0 0;

    transform: rotateY(-90deg);
  }

  li.drop:hover > ul.drop-down {
    visibility: visible;
    opacity: 1;

    transform: rotateY(0deg);

    transition: transform 0.4s, opacity 0.1s;
  }

  ul.drop-down li a {
    position: relative;
  }

  ul.drop-down li a:hover {
  }

  @media (max-width: 979px) {
    &:after {
      content: '';
      width: calc(100vw + 2em);
      height: inherit;
      display: block;
    }
    ul.menu > li a[aria-current='page'] {
      position: relative;
      left: -2em;
    }

    background: black;
    position: absolute;
    transform: ${({ open }) =>
      open ? 'translateX(-2em)' : 'translateX(calc(-100% - 2em))'};
    transition: 0.2s ease-in;
  }
`;
