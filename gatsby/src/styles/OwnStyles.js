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
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
    opacity:1;
    background: black;
    height: 100%;
}

body.active {
    opacity: 1;
}

*, *:before, *:after {
  box-sizing: border-box;
  outline: none;
}

button {
border:none;
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
        margin-left:0;
        display:block;
        font-size:.75em;
        line-height:1.2em;
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
.--right {
  text-align:right;
}

/*-------------------------------------------------------*/
/* 2. Grid / Grid-System
/*-------------------------------------------------------*/


.grid {
    @media(min-width:980px) {
        //max-width: calc(100vw - 13em);
    }
    display: grid;
    grid-auto-flow: dense;
    grid-gap: 2em;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
}

.grid--lg {
  @media(min-width:980px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-columns: repeat(auto-fill, minmax(calc((100vw - 21em) / 3), 1fr));
    grid-auto-flow: dense;
  }
}

.grid--fill {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.grid--fit {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
.grid__item--full {
  grid-column: span 3;
}

.row {
    display:flex;
    flex-direction:column;
    flex-wrap: wrap;   
    flex:1; 
    flex-direction: row;
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
    margin-left:-2em;
    .cell{
        padding-left:2em;
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
    color:black;
}
h1,
.heading--hl{
    margin-top  0;
    text-shadow: 4px 4px 0px #fded27;
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





/*-------------------------------------------------------*/
/* 6. Page Layout (Sidebar & Content)
/*-------------------------------------------------------*/
    

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
    width: 13em;
    float: left;
    height:100vh;
    background: black;
    text-align: right;
    z-index: 4;
    position: relative;
      &__inner {
        width:13em;
      }
}

@media(max-width:979px) {
    #sidebar {
        height:auto;
        width:100%;
      &__inner {
        width:100%;
      }   
    }
    
    
   
}

    #content {
        min-height:1px;
        width:100%;
        padding:0 1em; 
        background-color:white;
        @media(min-width:980px) {
           min-height:100vh;
           width:unset;
           margin-left: 13em;
           padding: 0 1em 0 2em;
           background: white,url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAHElEQVQYV2N8+/btf2FhYUYGKIAzMARgKjFUAABjLQgFowVeaQAAAABJRU5ErkJggg==) repeat;
           box-shadow:inset 7px -8px 14px -8px #000;
    }
}
.burger {
    position: absolute;
    top: 5%;
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;
    
    &:focus {
        outline: none;
    }
    
    div {
        width: 2rem;
        height: 0.25rem;
        background: white;
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
    }
}



.page {
 padding:9em 0 3em;
    @media(min-width:980px) {
        padding:2em 0 3em;
    }
  &__intro {
    padding:1em;
    margin-bottom:2em;
    p:last-child {
      margin-bottom:0;
    }
  }
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
    color: #d2d2d2;
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


ul.menu > li a[aria-current="page"],
 ul.menu > li a.active{
    background: #ffed27;
    color:black;
    border-right: 0;
    position:relative;
      height:100%;
}

ul.menu > li:hover>a{
    transition: all 0.15s linear;
    background: #ffed27;
    color:black;
}


ul.menu > li a[aria-current='page']:after,
 ul.menu > li a.active:after{    
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
    @media(max-width:979px) {
        margin-top  1em;
    }
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
   
      @media(max-width:979px) {
        display:flex;
        flex-direction:row;
        justify-content:flex-end;
        margin-bottom:0;
        a+a {
          margin-left:2em;
        }
        .s__copyright{
          display:none;
        }
      } 
      @media(max-width:600px) {
          flex-direction:column;
        }
      a {
       cursor:pointer;
        color:#d2d2d2;
        padding:8px 0;
        font-size:.75em;
        display:block;
      &:hover {
        color:#ffed27;
      }
        &:before {
            content:none;
        }
    }
    .infos__copyright {
      
      display:none;
      @media(min-width:980px) {
        padding-top: 1rem;
        font-size: 14px;

        bottom: 0;
        right: 3em;
      }
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
  box-shadow: 0 5px 13px 5px rgba(36,50,66,.12);
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
    
            display:block;
        }
        
    }
    
    &__image {
      cursor:default;
        overflow:hidden;
    }
    
    
    
    &__meta {
      margin:.5em 0 0;
        a{
          cursor:pointer;
            margin-left:0;
            display:block;
            font-size:.75em;
            line-height:1.2em;
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
 
    
}
  
  
  





/*-------------------------------------------------------*/
/* 10. Service
/*-------------------------------------------------------*/
.page-index {
    .service {
        &__single {
            flex-direction:row;
          @media(min-width:1200px) and (max-width:1300px) {
            flex-direction: column;
          }
        }
        &__heading {
            margin-top:0;
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
 
    
}
.badge {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 0 1rem;
        align-items: center;
     
       
        text-decoration: none;
        font-family:'jura',sans-serif;
        color:black; 
        min-height:2.3em;
 
        border:1px solid white;
        border-left:1em solid white;
        padding : .25em .25em .25em .75em;
        background-color: #ececec;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.96' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
       
        &.badge--active{
            border-color:black;
            .badge__name {
                color:white;
            }
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
        
        .badge__count {
          background: white;
          padding: .25em .5em;
          color:black;
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
              @media(max-width:550px) {
                display:none;
              }
                margin: 0 .5rem;
                text-align: center;
                line-height: 1.9em;
                font-family: 'jura';
                width: 2em;
                height: 2em;
                display: inline-block;
                text-transform: uppercase;
            
                &:hover:not([disabled]),
                &[aria-current]:not([disabled]),
                &.active{
                    background-color:#ffed27;
                  display:block;
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
                display:block;
            }  
            
        }
    }
    
}
.estimate {
    button {
        margin-right:.25em;
        h4 {
            font-size:16px;
            margin-top:0;
            
        }
    }
    .estimate__item {
        p {
            font-size:16px;
            margin-bottom:0;
            display:inline-block;
        }
        button {
            border:none;
            background:none;
            color:red;
            position:relative;
            top:-5px;
            cursor:pointer;
            outline:none;
        }
    }
 }   
    
    
.form {
    &__container {
     
        padding:.25em 0;
        display:flex;
        justify-content:space-between;
        textarea {
            width:100%;
           
          height: 100px;
          margin-bottom: -5px;
        }
          input:focus,
          textarea:focus{outline: none;}
          input,textarea {
            position: relative;
            padding: 5px 14px 7px;
          }
    }
  .grid--lg.estimate {
    @media(max-width:1200px) {
      grid-template-columns: 1fr;
      grid-gap: 0;
    }
    >.grid-item {
      align-self: end;
     

    }
  }
  .input__container {
    position: relative;
    width:inherit;
    margin: 0 1em;
    @media(max-width:880px) {
      margin-right:0;
    }
    &.--textarea {
      width:100%;
      margin-right: 0;
      @media(max-width:880px) {
        margin-left:0;
      }
    }
    
  }
  label {
     white-space: nowrap;
   }
    fieldset{
      margin-bottom:2em;
   
   
        padding: 0 2em 1.5em 2em;
      
      background-image: repeating-linear-gradient(-44deg, #6b6b6b, #6b6b6b 7px, transparent 7px, transparent 15px, #6b6b6b 15px), repeating-linear-gradient(46deg, #6b6b6b, #6b6b6b 7px, transparent 7px, transparent 15px, #6b6b6b 15px), repeating-linear-gradient(136deg, #6b6b6b, #6b6b6b 7px, transparent 7px, transparent 15px, #6b6b6b 15px), repeating-linear-gradient(226deg, #6b6b6b, #6b6b6b 7px, transparent 7px, transparent 15px, #6b6b6b 15px);
      background-size: 1px 100%, 100% 1px, 1px 100% , 100% 1px;
      background-position: 0 0, 0 0, 100% 0, 0 100%;
      background-repeat: no-repeat;
      border:none;
    }
  legend {
    background: white;
    padding: 0 1em;
    margin-bottom:1em;
    text-transform: uppercase;
    color: black;
    font-family:'jura',sans-serif;
    font-weight:bold;
  }
  /* Change the white to any color ;) */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  textarea:-webkit-autofill:active {
    box-shadow: 0 0 0 100px white inset !important;
    border: none;
    border-bottom: 1px solid transparent;
    border-bottom-color: #ccc;
  }

 
  .effect-9{border: 0;  border: 1px solid transparent; border-bottom-color: #ccc; transition: 0.4s;}
  
  .effect-9:focus{ transition: 0.4s;}

  .effect-9 ~ .focus-border{position: absolute; height: 48px; bottom: 0; left: 0; width: 0; transition: 0.4s;}
  .effect-9:focus ~ .focus-border{width:100%;   transition: 0.4s; border: 2px solid #fced28;}
  .effect-9:focus ~ .focus-border:after{position: absolute;content:"";left:-1px;bottom:1px;display:block;height:100%;width:100%;   transition: 0.4s; border: 2px solid black;}

  textarea.effect-9:focus ~ .focus-border {
    height:100px;
  }
   
  button.disabled {
        opacity:.3;
    }
  button[type="submit"] {
    background:#ffed27;
    padding: 10px 33px 10px 26px;
    position: relative;
    transition:all .2s ease-in;
    z-index: 1;
    cursor:pointer;
    &:hover {
      top:-1px;
      &:after {
        right: -.7em;
      }
    }
  }
}

.tab {
  &__nav {
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
  &__tabs {
    padding-bottom:1em;
    margin-top:1.5em;
  }
  &__container {
    padding: 1em ;
    border: 2px solid red;
    position: relative;
    top: -1px;
    div p:last-of-type {
      margin-bottom:0;
    }
  }
  &__accordion {
    overflow: hidden;
    transition: all 0.1s ease-in-out;
    line-height: 0;
    color: transparent;
    height: 0;
    padding: 0;
    border:none;
    &--active {
      margin:1em 0 2em;
      line-height: initial;
      padding: 1em;
      color: black;
      height: auto;
      transition: all 0.2s ease-in-out;
    }
  }
  &__tabs {
    position: relative;
    top: -1px;
    @media (max-width: 1359px) {
      display: none;
    }
  }
  &__accordion {
    @media (min-width: 1359px) {
      display: none;
    }
  }
}


/*************** slider *
 */

.slider {
 
  width:calc(100vw - 200px - 13em);
  height:calc((100vw - 200px - 13em)/ 1.33);
  max-width:900px;
  max-height: calc(900px / 1.33);
  overflow: hidden;
  text-align:center;
  position: relative;
  display: flex;
  margin:0 auto;
  .slider__container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /*opacity: 0;*/
    transition: all .3s ease-in;
  
    &.activeSlide {
      opacity: 1;
      z-index: 5;
      transform: translateX(0);
    }

    &.nextSlide {
      opacity: 0;
      transform: translateX(100%);
    }

    &.lastSlide {
      opacity: 0;
      transform: translateX(-100%);
    }

    .gatsby-image-wrapper {
      max-height: 100%;
    }
  }
  .nav__container {
    z-index: 99;
    button {
      z-index: 99;
    }
  }
}



.page-projects {
  .grid {
    grid-template-columns:  repeat(auto-fill, minmax(320px, 1fr));
  }
  
  
  .post__inner {
    @media(min-width:480px) and (max-width:1158px) {
    
        .post__content {
          padding:1em;
          justify-content: flex-end;
        }
      
    }
  }
}
.page-index {
  .grid {
    grid-template-columns: 1fr 1fr 1fr;

    .item__image {
      grid-column: 3/3;
    }

    .item__service {
      grid-column: span 3;
    }


    @media (min-width: 980px) and (max-width: 1199px) {
      .grid__item.item__image {
        grid-column: 1/3;
      }

      .grid__item.item__service {
        grid-column: span 3;
      }

    }
    @media (min-width: 1200px) {
      .grid__item.item__service {
        grid-column: span 2;
      }

      .grid__item.item__image {
        grid-column: 3/3;
      }
    }
  } 
  @media (min-width:1199px) {
    .item__about {
      margin: 0 15%;
    }
  }
}

  #container.preload * {
    transition: none;
    opacity:0;
  }


  .--dashed-border {
    background-image: repeating-linear-gradient(-44deg, #6b6b6b, #6b6b6b 7px, transparent 7px, transparent 15px, #6b6b6b 15px), repeating-linear-gradient(46deg, #6b6b6b, #6b6b6b 7px, transparent 7px, transparent 15px, #6b6b6b 15px), repeating-linear-gradient(136deg, #6b6b6b, #6b6b6b 7px, transparent 7px, transparent 15px, #6b6b6b 15px), repeating-linear-gradient(226deg, #6b6b6b, #6b6b6b 7px, transparent 7px, transparent 15px, #6b6b6b 15px);
    background-size: 1px 100%, 100% 1px, 1px 100% , 100% 1px;
    background-position: 0 0, 0 0, 100% 0, 0 100%;
    background-repeat: no-repeat;
    border:none;
  }
}
`;

export default OwnStyles;
