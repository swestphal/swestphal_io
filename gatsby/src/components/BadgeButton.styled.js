import styled from 'styled-components';

export const StyledBadgeButton = styled.button`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0 1rem;
  // safari no gap issue
  margin: 0 0.25em 0 0;

  align-items: center;

  text-decoration: none;
  font-family: 'jura', sans-serif;
  color: black;
  min-height: 2.3em;

  border: 1px solid white;
  border-left: 1em solid white;
  padding: 0.25em 0.25em 0.25em 0.75em;
  background-color: #ececec;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.96' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");

  border-color: ${(props) => props.colour};
  &:hover {
    color: white;
    transition: all 0.2s ease-in-out;
    background: none;
    background-color: ${(props) => props.colour};
  }

  &.badge--active {
    background: ${(props) => props.colour};
    border-color: ${(props) => props.colour};
    color: white;
  }
`;
