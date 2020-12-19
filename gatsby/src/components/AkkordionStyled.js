import styled from 'styled-components';

export const StyledAkkordion = styled.div`
  .tab__nav {
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    gap: 0.25rem;

    &.badge:hover {
      color: white;
      transition: all 0.2s ease-in-out;
    }
  }
  .tab__tabs {
    padding-bottom: 1em;
    margin-top: 1.5em;
  }
  .tab__container {
    padding: 1em;
    position: relative;
    top: -1px;
    div p:last-of-type {
      margin-bottom: 0;
    }
  }
  .tab__accordion {
    overflow: hidden;
    transition: all 0.1s ease-in-out;
    line-height: 0;
    color: transparent;
    height: 0;
    padding: 0;
    border: none;
    &--active {
      margin: 1em 0 2em;
      line-height: initial;
      padding: 1em;
      color: black;
      height: auto;
      transition: all 0.2s ease-in-out;
    }
  }
  .tab__tabs {
    position: relative;
    top: -1px;
    @media (max-width: 1359px) {
      display: none;
    }
  }
  .tab__accordion {
    @media (min-width: 1359px) {
      display: none;
    }
  }
`;
