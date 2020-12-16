import styled from 'styled-components';

export const StyledPagination = styled.div`
  margin: 2em 0;
  ul {
    display: flex;
    align-items: center;
    li {
      a {
        @media (max-width: 550px) {
          display: none;
        }
        margin: 0 0.5rem;
        text-align: center;
        line-height: 1.9em;
        font-family: 'jura', sans-serif;
        width: 2em;
        height: 2em;
        display: inline-block;
        text-transform: uppercase;

        &:hover:not([disabled]),
        &[aria-current]:not([disabled]),
        &.active {
          background-color: #ffed27;
          display: block;
        }

        &[disabled] {
          opacity: 0.3;
          pointer-events: none;
        }
      }
      &:first-of-type a {
        margin-left: 0;
      }
      &:first-of-type a,
      &:last-of-type a {
        width: 4em;
        display: block;
      }
    }
  }
`;
