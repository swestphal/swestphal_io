import styled from 'styled-components';

export const StyledNav = styled.nav`
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
