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

ul.menu > li:before {

        background-image: linear-gradient(to right,#a7a7a7 46%,rgba(255,255,255,0) 0%);
        background-position: bottom;
        background-size: 13px 1px;
        background-repeat: repeat-x;
        width: 100%;
        content: "";
        display: inline-block;
        position: absolute;
        bottom: -1px;
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


ul.menu > li.active {
    background: #ffed27;
    border-right: 0;
    position:relative;
}

ul.menu > li > a:hover {
    transition: all 0.15s linear;
  
    background: #ffed27;
 
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

ul.drop-down li {
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
    
.masonry-root {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.masonry-root .masonry-cell {
  flex: 1;
  margin: 4px;
}
.masonry-root .masonry-cell .masonry-item {
  background: #EC985A;
  color: white;
  margin: 4px;
  text-align: center;
  font-family: system-ui;
  font-weight: 900;
  font-size: 32px;
}
.masonry-root .masonry-cell:nth-child(1) .masonry-item {
  height: 120px;
  line-height: 120px;
}
.masonry-root .masonry-cell:nth-child(2) .masonry-item {
  height: 173px;
  line-height: 173px;
}
.masonry-root .masonry-cell:nth-child(3) .masonry-item {
  height: 111px;
  line-height: 111px;
}
.masonry-root .masonry-cell:nth-child(4) .masonry-item {
  height: 140px;
  line-height: 140px;
}
.masonry-root .masonry-cell:nth-child(5) .masonry-item {
  height: 139px;
  line-height: 139px;
}
.masonry-root .masonry-cell:nth-child(6) .masonry-item {
  height: 157px;
  line-height: 157px;
}
.masonry-root .masonry-cell:nth-child(7) .masonry-item {
  height: 119px;
  line-height: 119px;
}
.masonry-root .masonry-cell:nth-child(8) .masonry-item {
  height: 71px;
  line-height: 71px;
}
.masonry-root .masonry-cell:nth-child(9) .masonry-item {
  height: 154px;
  line-height: 154px;
}
.masonry-root .masonry-cell:nth-child(10) .masonry-item {
  height: 116px;
  line-height: 116px;
}
.masonry-root .masonry-cell:nth-child(11) .masonry-item {
  height: 156px;
  line-height: 156px;
}
.masonry-root .masonry-cell:nth-child(12) .masonry-item {
  height: 84px;
  line-height: 84px;
}
.masonry-root .masonry-cell:nth-child(13) .masonry-item {
  height: 155px;
  line-height: 155px;
}
.masonry-root .masonry-cell:nth-child(14) .masonry-item {
  height: 154px;
  line-height: 154px;
}
.masonry-root .masonry-cell:nth-child(15) .masonry-item {
  height: 88px;
  line-height: 88px;
}
.masonry-root .masonry-cell:nth-child(16) .masonry-item {
  height: 128px;
  line-height: 128px;
}
.masonry-root .masonry-cell:nth-child(17) .masonry-item {
  height: 140px;
  line-height: 140px;
}
.masonry-root .masonry-cell:nth-child(18) .masonry-item {
  height: 123px;
  line-height: 123px;
}
.masonry-root .masonry-cell:nth-child(19) .masonry-item {
  height: 181px;
  line-height: 181px;
}
.masonry-root .masonry-cell:nth-child(20) .masonry-item {
  height: 125px;
  line-height: 125px;
}
.masonry-root .masonry-cell:nth-child(21) .masonry-item {
  height: 191px;
  line-height: 191px;
}
.masonry-root .masonry-cell:nth-child(22) .masonry-item {
  height: 116px;
  line-height: 116px;
}
.masonry-root .masonry-cell:nth-child(23) .masonry-item {
  height: 150px;
  line-height: 150px;
}
.masonry-root .masonry-cell:nth-child(24) .masonry-item {
  height: 84px;
  line-height: 84px;
}
.masonry-root .masonry-cell:nth-child(25) .masonry-item {
  height: 101px;
  line-height: 101px;
}
.masonry-root .masonry-cell:nth-child(26) .masonry-item {
  height: 102px;
  line-height: 102px;
}
.masonry-root .masonry-cell:nth-child(27) .masonry-item {
  height: 115px;
  line-height: 115px;
}
.masonry-root .masonry-cell:nth-child(28) .masonry-item {
  height: 179px;
  line-height: 179px;
}
.masonry-root .masonry-cell:nth-child(29) .masonry-item {
  height: 170px;
  line-height: 170px;
}
.masonry-root .masonry-cell:nth-child(30) .masonry-item {
  height: 171px;
  line-height: 171px;
}
.masonry-root .masonry-cell:nth-child(31) .masonry-item {
  height: 76px;
  line-height: 76px;
}
.masonry-root .masonry-cell:nth-child(32) .masonry-item {
  height: 98px;
  line-height: 98px;
}
.masonry-root .masonry-cell:nth-child(33) .masonry-item {
  height: 137px;
  line-height: 137px;
}
.masonry-root .masonry-cell:nth-child(34) .masonry-item {
  height: 113px;
  line-height: 113px;
}
.masonry-root .masonry-cell:nth-child(35) .masonry-item {
  height: 91px;
  line-height: 91px;
}
.masonry-root .masonry-cell:nth-child(36) .masonry-item {
  height: 97px;
  line-height: 97px;
}
.masonry-root .masonry-cell:nth-child(37) .masonry-item {
  height: 150px;
  line-height: 150px;
}
.masonry-root .masonry-cell:nth-child(38) .masonry-item {
  height: 166px;
  line-height: 166px;
}
.masonry-root .masonry-cell:nth-child(39) .masonry-item {
  height: 120px;
  line-height: 120px;
}
.masonry-root .masonry-cell:nth-child(40) .masonry-item {
  height: 146px;
  line-height: 146px;
}
.masonry-root .masonry-cell:nth-child(41) .masonry-item {
  height: 66px;
  line-height: 66px;
}
.masonry-root .masonry-cell:nth-child(42) .masonry-item {
  height: 164px;
  line-height: 164px;
}
.masonry-root .masonry-cell:nth-child(43) .masonry-item {
  height: 159px;
  line-height: 159px;
}
.masonry-root .masonry-cell:nth-child(44) .masonry-item {
  height: 138px;
  line-height: 138px;
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
   
    &.all[aria-current='page'] {

            background:black;
            color:white;
            .badge__count {
                color:black;
                }
        }
    &.php {
        border-color:#E48E00;
        &[aria-current='page']  {
            background:#E48E00;
        }
    }
    &.xd {
        border-color:#f92dc0;
         &[aria-current='page']  {
            background:#f92dc0;
        }
    }
    &.react {
        border-color:#3CD7FC;
         &[aria-current='page'] {
            background:#3CD7FC;
        }
    }
    &.wp {
        border-color:#22759A;
        &[aria-current='page']  {
            background:#22759A;
        }
    }
    &.gatsby {
        border-color:#6C4693;
         &[aria-current='page']  {
            background: #6C4693;
        }
    }
    &.javascript{
        border-color:#FBC732;
         &[aria-current='page']  {
            background:#FBC732;
        }
    }
} 
`;

export default OwnStyles;
