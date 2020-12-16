import styled from 'styled-components';
import { Link } from 'gatsby';
import React from 'react';

export const StyledBadgeLink = styled((props) => <Link {...props} />)`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0 1rem;
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

  &.badge--active {
    border-color: black;
    .badge__name {
      color: white;
    }
    .badge__count {
      color: black;
    }
  }

  border-color: ${(props) => props.colour};
  &[aria-current='page'],
  &:hover {
    color: white;
    transition: all 0.2s ease-in-out;
    background: none;
    background-color: ${(props) => props.colour};
  }

  &.all {
    border-color: black;
    &.all.active,
    &.all[aria-current] {
      background: black;
      color: white;
    }
  }

  .badge__count {
    background: white;
    padding: 0.25em 0.5em;
    color: black;
  }
`;
