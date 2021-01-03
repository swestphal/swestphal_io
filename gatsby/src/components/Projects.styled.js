import styled from 'styled-components';

export const StyledProjekteContainer = styled.div``;

export const OuterContent = styled.div`
  height: 0;
  width: calc(100% - 2em);
  @media (min-width: 980px) {
    width: calc(100% - 13em - 3em);
  }
  margin-top: 1em;
  color: #fff;
  position: absolute;
  left: 1em;
  @media (min-width: 980px) {
    left: calc(13em + 2em);
  }
  

  right: 15px;
  bottom: auto;
  z-index: 5;
  transition: height 0.5s ease-in-out;
  overflow: hidden;

  .btn {
    background: #ffed27;
    color: black;
    margin-top.25em;
    display: inline-block;
    padding: 0.25em 0.5em;
  }
  .closeDetail {
    position: absolute;
    right: 1em;
    bottom:520px;
    @media(min-width:1100px) {
      bottom: 380px;
    }
    color: #ffed27;
    background: black;
    border-radius: 50%;
    padding: 1px;
    cursor: pointer;
  }
  .port__tags {
    margin-top:1em;
    line-height: 16px;
    margin-bottom: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    li {
      
      padding-right: 10px;
      font-size: 16px;
     
      font-family: 'jura', sans-serif;
    }
  }
  .content {
    overflow: hidden;
    height: calc(100% - 1em);
    z-index: 1;

    .port__items {
      flex-wrap: nowrap;
      padding: 1em 0;
      flex-direction: column;
      @media(min-width:1100px) {
        flex-direction: row;
        align-content:;
      }
      @media(min-width:1200px) {
        padding: 1em ;
      }
      @media(min-width:1440px) {
        padding: 1em 2em;
      }
      margin: 0 auto;
      align-items: center;
      height: 100%;
      &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        background: -moz-linear-gradient(
          top,
          rgba(32, 51, 63, 0.9) 0%,
          rgba(32, 51, 63, 0.8) 73%,
          rgba(32, 51, 63, 0.5) 96%,
          rgba(32, 51, 63, 0.5) 100%
        );
        background: -webkit-linear-gradient(
          top,
          rgba(32, 51, 63, 0.9) 0%,
          rgba(32, 51, 63, 0.8) 73%,
          rgba(32, 51, 63, 0.5) 96%,
          rgba(32, 51, 63, 0.5) 100%
        );
        background: linear-gradient(
          to bottom,
          rgba(32, 51, 63, 0.9) 0%,
          rgba(32, 51, 63, 0.8) 73%,
          rgba(32, 51, 63, 0.5) 96%,
          rgba(32, 51, 63, 0.5) 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e620333f',endColorstr='#8020333f',GradientType=0);
      }
    }
  }
  .content--bg {
    width: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .port__item--img {
    padding: 0 1em;
    width:60%;
    height:400px;
    display: flex;
    margin: auto 0;
    flex-direction: column;
    justify-content: center;
    @media(min-width:1100px) {
      display: inline-block;
      width: 40%;
      height:unset;
    }
    @media(min-width:1440px) {
      width: 50%;
    }
  }
  .port__item--text {
    padding: 0 1em;
    width:100%;
    @media(min-width:1100px) {
      width:60%;
    }
    @media(min-width:1440px) {
      width: 50%;
    }
    p {
      color: white;
      font-size: 18px;
      line-height: 23px;
    }
    h4 {
      color:white;
      font-size: 22px;
      margin-bottom: 8px;
    }
  }
`;
export const PortfolioItem = styled.div`
  padding: 1em 0 0 1em;
  position: static;

  transition: margin 0.5s ease-in-out;
  .out {
    height: 600px;
    @media (min-width: 1100px) {
      height: 470px;
    }
  }
  .in {
    height: 0;
  }
  width: 100%;
  @media (min-width: 500px) {
    width: calc(100% / 2);
  }
  @media (min-width: 630px) {
    width: calc(100% / 3);
  }

  .post__inner {
    position: relative;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  .post__logo {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    z-index: 3;
    transform: translate(-50%, -50%);
  }
  .post__image {
    cursor: pointer;
    position: relative;
    box-shadow: 0 5px 13px 5px rgba(36, 50, 66, 0.12);
    top: 0;

    left: 0;
    height: calc(100vw - 2em);
    @media (min-width: 500px) {
      height: calc((100vw - 5em) / 2);
    }
    @media (min-width: 630px) {
      height: calc((100vw - 5em) / 3);
    }
    @media (min-width: 980px) {
      height: calc((100vw - 15em - 5em) / 3);
    }

    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    transition: all 0.3s ease-out;

    background-position: center;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: inherit;
      transition: inherit;
    }
  }
  .post__image:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background: ${(props) => props.colour};
    opacity: 0.5;
  }

  &.isExpanded {
    margin-bottom: 600px;
    @media (min-width: 1100px) {
      margin-bottom: 470px;
    }
  }
  &:hover .post__image::after,
  .post__image.isActive::after {
    transform: scale(1.1);
  }
`;
