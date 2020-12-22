import styled from 'styled-components';

export const StyledLayout = styled.div`
  #container {
    height: 100%;
    opacity: 1;
    transition: all 0.17s ease-in-out;
    position: relative;
    overflow: hidden;
  }

  #container.active {
    opacity: 1;
  }

  .main {
    padding-left: 40%;
    width: auto;
  }

  #sidebar {
    display: block;
    width: 15em;
    float: left;
    height: 100vh;
    text-align: right;
    z-index: 4;
    position: fixed;
    overflow: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }
  }
  #sidebar__inner {
    width: 13em;
    background: black;
  }
  @media (max-width: 979px) {
    #sidebar {
      height: auto;
      width: 100%;
      &__inner {
        width: 100%;
      }
    }
  }

  #content {
    min-height: 1px;
    width: 100%;
    padding: 0 1em;
    background-color: white;
    @media (min-width: 980px) {
      min-height: 100vh;
      width: unset;
      margin-left: 13em;
      padding: 0 1em 0 2em;
      background-color: white;
      //background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAHElEQVQYV2N8+/btf2FhYUYGKIAzMARgKjFUAABjLQgFowVeaQAAAABJRU5ErkJggg==) repeat;
      box-shadow: inset 7px -8px 14px -8px #000;
    }
  }

  .page {
    padding: 9em 0 3em;
    @media (min-width: 980px) {
      padding: 2em 0 3em;
    }
    &__intro {
      padding: 1em;
      margin-bottom: 2em;
      p:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export const StyledSidebar = styled.header`
  .sidebar__menu {
    @media (max-width: 979px) {
      margin-top: 1em;
    }
  }
  .sidebar__social {
    margin: 2rem 24px 2rem 0;
    .social__icons li {
      display: inline-block;
      a {
        font-size: 40px;
        color: black;
      }
    }
  }

  .sidebar__infos {
    margin: 0 1.5em 2rem 0;

    @media (max-width: 979px) {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      margin-bottom: 0;
      a + a {
        margin-left: 2em;
      }
      .s__copyright {
        display: none;
      }
    }
    @media (max-width: 600px) {
      flex-direction: column;
    }
    a {
      cursor: pointer;
      color: #d2d2d2;
      padding: 8px 0;
      font-size: 0.75em;
      display: block;
      &:hover {
        color: #ffed27;
      }
      &:before {
        content: none;
      }
    }
    .infos__copyright {
      display: none;
      @media (min-width: 980px) {
        padding-top: 1rem;
        font-size: 14px;

        bottom: 0;
        right: 3em;
      }
    }
    .link {
      padding-left: 10px;
    }
    svg {
      position: relative;
      top: 5px;
      left: -10px;
    }
  }
`;
