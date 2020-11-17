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
    
    
    &__content {
        margin-left:;
        display:inline-block;
        font-size:.75em;
        line-height:1em;
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
    max-width: calc(100vw - 14em);
    display: grid;
    grid-auto-flow: dense;
    grid-gap: 2em;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
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
    flex-wrap: wrap;   
    flex:1; 
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
 font-size: calc(18px + 7 * ((100vw - 320px) / 960));

@media screen and (min-width: 768px)
*{
    font-size: calc(18px + 9 * ((100vw - 320px) / 960));
}

@media screen and (min-width: 1024px)
* {
    font-size: calc(18px + 11 * ((100vw - 320px) / 960));
}

@media screen and (min-width: 1280px)
* {
    font-size: calc(25px + 17 * ((100vw - 1280px) / 920));
}
  line-height: 23px;
}
body, .article {
  font-family: "enriqueta", sans-serif;
  font-size: 1em;
  line-height: 1.27777778em;
  margin: auto;
  color:#909090;
}
h1, .h1 {
  font-size: 2.38888889em;
  line-height: 1.06976744em;
  margin-top: 0.53488372em;
  margin-bottom: 1.06976744em;
}
h2, .h2 {
  font-size: 1.77777778em;
  line-height: 1.4375em;
  margin-top: 0.71875em;
  margin-bottom: 0.71875em;
}
h3, .h3 {
  font-size: 1.33333333em;
  line-height: 1.91666667em;
  margin-top: 0.95833333em;
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
    font-family:'jura',sans-serif;
    text-transform:uppercase;
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
/* 6. Page Layout (Sidebar & Content)
/*-------------------------------------------------------*/
    
#content {
  
   margin-left: 14em;
   padding: 0 1em 0 2em;
   background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAHElEQVQYV2N8+/btf2FhYUYGKIAzMARgKjFUAABjLQgFowVeaQAAAABJRU5ErkJggg==) repeat;
       box-shadow:inset 7px -8px 14px -8px #000;
   
}

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
    width: 14em;
    float: left;
    height:100vh;
    background: #fff;
    text-align: right;
    z-index: 4;
    position: relative;

   
}

.page {
    padding-top:2em;
}



/*-------------------------------------------------------*/
/* 4. Sidebar with Nav
/*-------------------------------------------------------*/


ul.menu,
    ul.archives,
    ul.categories {
    padding: 0;
    margin: 0;
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
    padding: .25em .75em .25em 1.25em;
    color: #000;
    font-family: 'jura', sans-serif;
    font-size: 1.77777778em;
    line-height: 1.4375em;

    text-transform: uppercase;
    text-decoration: none;
 
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
      height:100%;
}

ul.menu > li:hover>a{
    transition: all 0.15s linear;
    background: #ffed27;
}


ul.menu > li a[aria-current='page']:after {    
 content: "";
    position: absolute;
    width: 1.4em;
    height: 1.4em;
    background: #ffed27;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    top: .26em;
    right: -.65em;
    z-index: 0;
     box-shadow: 3px -2px 9px -1px rgba(0,0,0,0.6);
     box-shadow: 7px -8px 8px -7px rgba(0,0,0,0.7);
     z-index:0;
     
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
    margin:  0em 1.5em 2rem 0;
    a {
        padding:8px 0;
        font-size:18px;
        display:block;
        &:before {
            content:none;
        }
    }
    .infos__copyright {
        padding-top:1rem;
        font-size:14px;
        position:absolute;
    
        bottom:0;
        right: 3em;
    
    }
    .link {
        padding-left:10px;
    }
    svg {
        position: relative;
        top: 5px;
        left:-10px;
    }
    
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
   
   
  
    &__content {
        padding:.5em;
        padding: .5em;
        flex: 1;
        justify-content: space-between;
        display: flex;
        flex-direction: column;
        h2,h3,h4 {
            margin-top:0;
            color:black;
            line-height:1em;
        }
    }
    &__inner {
        height:100%;
            display: flex;
            flex-direction: column;
        a {
            overflow:hidden;
            display:block;
        }
        
    }
    
    &__image {
        overflow:hidden;
    }
    
    
    
    &__meta {
        margin-bottom:0;
    }
 
    
}
  
  
  





/*-------------------------------------------------------*/
/* 10. Service
/*-------------------------------------------------------*/

.service {
    &__single {
        flex-direction:row;
      
    }
    &__heading {
        margin-top:0;
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
   
    padding-bottom:1em;
    -webkit-column-break-inside: avoid;
    -moz-column-break-inside: avoid;
    column-break-inside: avoid;
}



/*-------------------------------------------------------*/
/* 11.  filter badge
/*-------------------------------------------------------*/
.filter {   
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2em;
 
    .badge {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 0 1rem;
        align-items: center;
        background: grey;
        padding:.25em;
        text-decoration: none;
        font-family:'jura';
        color:black; 
    }
    .badge {
        border:1px solid white;
        border-left:1em solid white;
        padding-left : .75em;
        background-color: #ececec;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.96' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
       
        &.active{
            border-color:black;
            color:white
             .badge__count {
                color:black;
                }
        }
        
        &.all {
            border-color:black;
            &.all.active,
             &.all[aria-current]{
                background:black;
                color:white;
            
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
        .badge__count {
          background: white;
          padding: .25em .5em;
          color:black;
        }
    } 
}
/*-------------------------------------------------------*/
/* 11.  pagination
/*-------------------------------------------------------*/
.pagination {
    margin:2em 0;
    ul {
        display:flex;
        align-items:center;
        li {
           
            a {
                margin: 0 .5rem;
                text-align: center;
                line-height: 1.9em;
                font-family: 'jura';
                width: 2em;
                height: 2em;
                border: 1px solid grey;
                display: inline-block;
                text-transform: uppercase;
                
                &[aria-current]:not([disabled]),
                &.active{
                    background:#ffed27;
                }
                
                &[disabled]{
                    opacity:0.3;
                    pointer-events:none;
                }
                
            } 
            &:first-of-type a{
                margin-left:0;
            }
            &:first-of-type a,
            &:last-of-type a{
                width:4em;
            }  
            
        }
    }
}
`;

export default OwnStyles;
