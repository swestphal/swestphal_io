import { createGlobalStyle } from 'styled-components';
import grid from './grid';

/*-------------------------------------------------
 Table of Css

    1. General Code
    2. Font
    3. Sidebar with Nav
    4. Page Content Area
    5. Card
    5. Post

-------------------------------------------------*/
const OwnStyles = createGlobalStyle`

/*-------------------------------------------------*/
/* 1. General code
/*-------------------------------------------------*/

html{
    height:100%;
}

body {
    opacity:1;
    background: #fff;
    height: 100%;
}

body.active {
    opacity: 1;
}

*, *:before, *:after {
  box-sizing: border-box;
}

#container {
    height: 100%;
    opacity: 1;
    transition: all 0.17s ease-in-out;
}

#container.active {
    opacity: 1;
}

ul {
    padding: 0;
    margin: 0;
}

ul li {
    list-style: none;
}

.preloader {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    margin-top: -25px;
    margin-left: -25px;
    -webkit-backface-visibility: hidden;
    transition: all 0.17s ease-in-out;
  
}

.preloader img {
    -webkit-backface-visibility: hidden;
}



/*-------------------------------------------------------*/
/* 2. Grid / Grid-System
/*-------------------------------------------------------*/


.grid {
    max-width: calc(100vw - 300px);
    display: grid;
    grid-auto-flow: dense;
    grid-gap: 40px;
   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.grid--fill {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.grid--fit {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}


.row {
    display:flex;
    flex-direction:column;
    &--space {
        justify-content:space-between;
    }
}

/*-------------------------------------------------------*/
/* 2. Font
/*-------------------------------------------------------*/

html, .root {
  font-size: 18px;
  line-height: 23px;
}
body, .article {
  font-family: "Courier New", sans-serif;
  font-size: 1em;
  line-height: 1.27777778em;
  margin: auto;
}
h1, .h1 {
  font-size: 3.38888889em;
  line-height: 1.13114754em;
  margin-top: 0.37704918em;
  margin-bottom: 0.75409836em;
}
h2, .h2 {
  font-size: 2.27777778em;
  line-height: 1.12195122em;
  margin-top: 0.56097561em;
  margin-bottom: 0.56097561em;
}
h3, .h3 {
  font-size: 1.5em;
  line-height: 1.7037037em;
  margin-top: 0.85185185em;
  margin-bottom: 0em;
}
h4, .h4 {
  font-size: 1em;
  line-height: 1.27777778em;
  margin-top: 1.27777778em;
  margin-bottom: 0em;
}
h5, .h5 {
  font-size: 1em;
  line-height: 1.27777778em;
  margin-top: 1.27777778em;
  margin-bottom: 0em;
}
h1,h2,h3,h4,h5 {
    font-family:'noodle',sans-serif;
}

p, ul, ol, pre, table, blockquote {
  margin-top: 0em;
  margin-bottom: 1.27777778em;
}
ul ul, ol ol, ul ol, ol ul {
  margin-top: 0em;
  margin-bottom: 0em;
}

a {
    text-decoration:none;
    color:inherit;
    overflow:hidden;
    &.link {
        position:relative;
        display:inline-block;
    }
    &.link:before {
        background-image: linear-gradient(to right,#a7a7a7 50%,rgba(255,255,255,0) 0%);
        background-position: bottom;
        background-size: 12px 1px;
        background-repeat: repeat-x;
        width: 100%;
        content: "";
        display: inline-block;
        position: absolute;
        bottom: 8px;
        height: 1px;
        left: 11px;
    }
}
    
/* Let's make sure all's aligned */
hr, .hr {
  border: 1px solid;
  margin: -1px 0;
}

sub, sup {
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}

/*-------------------------------------------------------*/
/* 3. Sidebar with Nav
/*-------------------------------------------------------*/

#sidebar {
    display: block;
    width: 300px;
    float: left;
    background: #fff;
    text-align: right;
    z-index: 4;
    position: relative;
    box-shadow: 0 0 10px #000;
}

.logo-box {
    padding: 30px 30px;
    background: #fff;
    text-align: center;
}

a.logo {
    display: inline-block;
    margin-bottom: 10px;
}

p.slogan {
    color: #fff;
    font-size: 24px;
    font-family: 'Courier New', sans-serif;
    font-weight: 300;
    font-style: italic;
    margin: 0;
    line-height: 30px;
}

ul.menu,
    ul.archives,
    ul.categories {
    padding: 0;
    margin: 0;
}

a.elemadded {
    display: none;
    color: #000;
    font-size: 28px;
    font-family: 'Courier New', sans-serif;
    text-transform: uppercase;
    padding: 20px;
    background: #ffed27;
    text-decoration: none;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    transition: all 0.17s ease-in-out;
  
}

a.elemadded:hover {
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
    padding: 18px 24px;
    color: #000;
    font-size: 26px;
    font-family: 'noodle', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    text-decoration: none;
    line-height: 20px;
    transition: all 0.3 linear;

}

ul.menu > li:before {

        background-image: linear-gradient(to right,#a7a7a7 46%,rgba(255,255,255,0) 0%);
        background-position: bottom;
        background-size: 13px 1px;
        background-repeat: repeat-x;
        width: 100%;
        content: "";
        display: inline-block;
        position: absolute;
        bottom: 0;
        height: 1px;
        left:1px;
        z-index:1;
    }
    
ul.menu {
    position:relative;
}
ul.menu:before {
    background-image: linear-gradient(to right,#a7a7a7 46%,rgba(255,255,255,0) 0%);
    background-position: bottom;
    background-size: 13px 1px;
    background-repeat: repeat-x;
    width: 100%;
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    height: 1px;
    left: 0px;
    z-index: 999;
    }
ul.menu li:first-child a {
    border-top: 1px dashed #d6d6d6;
}

ul.menu > li.active {
    background: #ffed27;
    //border-bottom: 1px dashed #d6d6d6;
    border-right: 0;
    position:relative;
}

ul.menu > li > a:hover {
    transition: all 0.15s linear;
  
    background: #ffed27;
    /border-bottom: 1px dashed #d6d6d6;
}

ul.menu > li.active:after {    
    content: "";
     position: absolute;
     width: 40px;
     height: 40px;
     background: #ffed27;
     transform: rotate(45deg);
     top: 8px;
     right: -20px;
     z-index:0;
     box-shadow: 3px -2px 9px -1px rgba(0,0,0,0.6);
     z-index:-1;
}

ul.menu li a span {
    position: relative;
    z-index: 2;
}


ul.drop-down {
    position: absolute;
    top: 0;
    width: 220px;
    visibility: hidden\0/;
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

ul.drop-down li {
    position: relative;
}

ul.drop-down li a:hover {
}



/*-------------------------------------------------*/
/* 3. Sidebar Social & Infos
/*-------------------------------------------------*/

.sidebar__menu {
    padding-top:4rem;
}
.sidebar__social {
   margin:  2rem 24px 2rem 0;    
   .social__icons li {
      display:inline-block;
      a {
         font-size: 40px;
         color: black;
      }
   }
}


.sidebar__infos {
    margin:  2rem 24px 2rem 0;
    a {
        padding:8px 0;
    }
    .infos__copyright {
        padding-top:2rem;
    }
    .link {
        padding-left:10px;
    }
    svg {
        position: relative;
        top: 5px;
        left:-10px;
    }
    .infos__copyright {
        position:absolute;
        bottom:20px;
        right:24px;
        margin-bottom:0;
    }
}

/*-------------------------------------------------------*/
/* 4. Page Content Area
/*-------------------------------------------------------*/
    
#content {
   height:100%;
   margin-left:300px;
   padding: 32px;
   }
 .content__inner {
   overflow:hidden;
   position: relative;
}

/*-------------------------------------------------------*/
/* 5. Card
/*-------------------------------------------------------*/   
   
.card {
    box-shadow: 0 0 8px #787878;
}


/*-------------------------------------------------------*/
/* 6. Post
/*-------------------------------------------------------*/


.post {

    height:100%;
    background:#d6d6d6;
   
    h2, a, p {
        color:black;
    }
  
    &__content {
        padding:1rem;
    }
    &__inner {
        height:100%;
        
        a {
            overflow:hidden;
            display:block;
        }
        .post__image {
            position: relative;
            transition: transform 0.8s ease-in-out 0s;
        }
        
        a:hover .post__image{
            transform: scale(1.03) rotate(.5deg);
            transition: transform 1.8s ease-in-out 0s;
        }
    }
    
    &__image {
        overflow:hidden;
    }
    
    &__quote {
    
    }
    &__inner {
    }
    
    &__teaser {
    
    }
    
    &__meta {
        margin-bottom:0;
    }
    
    &--small {
    
    }
    
    &--large {
    
    }
    
    &--bright {

    }
    
    &--dark {
    
    }
    
    &--handle {
        
    }
    
    
    &__portfolio {
        .listgroup__content p:first-of-type {
            font-weight:bold;
        }
    }
    
   
    
    
    
    .listgroup {
        position:relative;
        &__icon {
            position:absolute;
            left:0px;
        }
        &__content {
            margin-left:30px;
            display:inline-block;
            p {
                margin:0;
                color:gray;
                &:first-of-type {
                    color:black;
                }
            }
        }
    }
    
   
}
`;

export default OwnStyles;
