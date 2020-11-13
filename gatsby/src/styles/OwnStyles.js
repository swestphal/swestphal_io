import { createGlobalStyle } from 'styled-components';

/*-------------------------------------------------
 Table of Css

    1. General Code
    2. Grid / Grid-System
    3. Font
    4. Sidebar with Nav
    5. Sidebar Social&Info
    6. Page Content Area
    7. Card
    8. Post

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
                 font-weight:bold;
            }
        }
       
    }
    
}


/*-------------------------------------------------------*/
/* 2. Grid / Grid-System
/*-------------------------------------------------------*/


.grid {
    max-width: calc(100vw - 300px);
    display: grid;
    grid-auto-flow: dense;
    grid-gap: 0;
    grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
}

.grid--lg {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-flow: dense;
    @media(min-width:1200px){
        grid-template-columns: repeat(2, 1fr);
        grid-auto-flow: dense;
    }
}

.grid--fill {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.grid--fit {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}

.grid__item {
    margin:30px;
}
.grid__item--lg {
    grid-column: span 2;
    grid-row: span 2;
}

.grid__item--right {
    grid-column: 3 / span 2;
}

.grid__item--db {
    grid-column: span 2;
}


.row {
    display:flex;
    flex-direction:column;
    flex-wrap: no-wrap;    
    &--space {
        justify-content:space-between;
    }
    &--aligncenter {
        align-items: center;
    }
}
.cell {
    float: left;
    box-sizing: border-box;
 
}
.row--gutters {
    margin-left:-20px;
    .cell{
        padding-left:20px;
    }
}



/*-------------------------------------------------------*/
/* 3. Font
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
    &.link {
        overflow:hidden
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



h3,h4{
    &.php {
        color:#E48E00;
    }
    &.xd {
        color:#f92dc0;
    }
    &.react {
        color:#3CD7FC;
    }
    &.wp {
        color:#22759A;
    }
    &.gatsby {
        color:#6C4693;
    }
    &.javascript{
        color:#FBC732;
    }
}



/*-------------------------------------------------------*/
/* 4. Sidebar with Nav
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

ul.menu > li a:before {

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


ul.menu > li a[aria-current="page"] {
    background: #ffed27;
    border-right: 0;
    position:relative;
}

ul.menu > li:hover>a{
    transition: all 0.15s linear;
    background: #ffed27;
}

ul.menu > li a[aria-current='page']:after {    
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

ul.drop-down li a{
    position: relative;
}

ul.drop-down li a:hover {
}



/*-------------------------------------------------*/
/* 5. Sidebar Social & Infos
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
/* 6. Page Content Area
/*-------------------------------------------------------*/
    
#content {
   height:100vh;
   margin-left:300px;
   padding: 32px;
   background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAHElEQVQYV2N8+/btf2FhYUYGKIAzMARgKjFUAABjLQgFowVeaQAAAABJRU5ErkJggg==) repeat;
   }
 .content__inner {   overflow:hidden;
   position: relative;
}

/*-------------------------------------------------------*/
/* 7. Card
/*-------------------------------------------------------*/   
   
.card {
  box-shadow: 0 10px 12px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}


/*-------------------------------------------------------*/
/* 8. Post
/*-------------------------------------------------------*/


.post {
    height:100%;
    background-color: #ececec;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.96' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
   
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
    
}
  
/*-------------------------------------------------------*/
/* 9. about Page
/*-------------------------------------------------------*/ 

.about .grid {
    
}

/*-------------------------------------------------------*/
/* 10. Service
/*-------------------------------------------------------*/

.service {
    &__single {
        flex-direction:row;
    }
    &__icon {
        display:block;
        filter: grayscale(100%);
    }
    &__single:hover {
        .service__icon{
            filter:grayscale(0);
       }
      
    }
}
    


/* The Masonry Container */
.fmasonry {
   column-width: 300px;
    column-gap: 1em;
}


.fmasonry-cell { 
    margin-bottom: 1em;
    padding: 1em;
    -webkit-column-break-inside: avoid;
    -moz-column-break-inside: avoid;
    column-break-inside: avoid;
}



/*-------------------------------------------------------*/
/* 11.  badge
/*-------------------------------------------------------*/
.filter {   
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 4rem;
  }
.badge {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    align-items: center;
    padding: 5px;
    background: grey;
    border-radius: 2px;
    text-decoration: none;
    font-size: clamp(1.5rem, 1.4vw, 2.5rem);
    .badge__count {
      background: white;
      padding: 5px 5px 0;
    }
    
}
.badge {
    border:1px solid white;
    border-left:20px solid white;
    padding-left :   10px;
    background-color: #ececec;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.96' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
   
    &.all.active {

            background:black;
            color:white;
            .badge__count {
                color:black;
                }
        }
    &.php {
        border-color:#E48E00;
        &.active  {
            background:#E48E00;
        }
    }
    &.xd {
        border-color:#f92dc0;
         &.active  {
            background:#f92dc0;
        }
    }
    &.react {
        border-color:#3CD7FC;
         &.active {
            background:#3CD7FC;
        }
    }
    &.wp {
        border-color:#22759A;
        &.active  {
            background:#22759A;
        }
    }
    &.gatsby {
        border-color:#6C4693;
         &.active  {
            background: #6C4693;
        }
    }
    &.javascript{
        border-color:#FBC732;
         &.active  {
            background:#FBC732;
        }
    }
} 
`;

export default OwnStyles;
