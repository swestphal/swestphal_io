import { createGlobalStyle } from 'styled-components';

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

html , .root {
  font-size: calc(18px + 7 * ((100vw - 320px) / 960));
  line-height: 23px;
    @media screen and (min-width: 768px) {
        font-size: calc(18px + 8 * ((100vw - 320px) / 960));
    }
    
    @media screen and (min-width: 1024px) {
        font-size: calc(18px + 9 * ((100vw - 320px) / 960));
    }
    
    @media screen and (min-width: 1280px) {
        font-size: calc(18px + 10 * ((100vw - 320px) / 960));
    }
 
}
body, .article {
  font-family: "enriqueta", sans-serif;
  font-size: 1em;
  line-height: 1.27777778em;
  margin: auto;
  color:#909090;
}
.internlink {
  text-shadow: 2px 2px 0px #fded27!important;
  color:black;
  padding:0 .25rem;
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
    margin-top:  0;
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
        overflow:hidden;
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
            font-size:18px;
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





    
    
.form {
  &__error {
    position: absolute;
    font-size: .5em;
    color: red;
    top: 3.9em;
    left: 8em;
  }
  .label__error {
    color:red;
  }

    &__container {
        position: relative;
        padding:.5em 0 .25em 0;
        display:flex;
        justify-content:space-between;
        textarea {
            width:100%;
           
          height: 3.79em;
          margin-bottom: -5px;
        }
          input:focus,
          textarea:focus{outline: none;}
          input,textarea {
            position: relative;
            padding: 5px 14px 7px;
          }
        textarea {
          margin-left:-14px;
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
    width: 100%;
    margin: 0 0 0 1em;
    @media(max-width:880px) {
      margin-right:0;
    }
    &.--textarea {

      width:100%;
      margin: 0;
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

 
  .effect-9{border: 0;  border: 1px solid transparent; width:100%;border-bottom-color: #ccc; transition: 0.4s;}
  
  .effect-9:focus{ transition: 0.4s;}

  .effect-9 ~ .focus-border{position: absolute; height: 48px; bottom: 0; left: 0; width: 0; transition: 0.4s;}
  .effect-9:focus ~ .focus-border{width:100%;   transition: 0.4s; border: 2px solid #fced28;}
  .effect-9:focus ~ .focus-border:after{position: absolute;content:"";left:-1px;bottom:1px;display:block;height:100%;width:100%;   transition: 0.4s; border: 2px solid black;}

 textarea.effect-9 {
   border:none;
  
 }
  textarea.effect-9:focus ~ .focus-border {
    height:3.79em;
    left: -14px;

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
    .push-right {
      margin-left: 30px;
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
  
  .grid-about {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows:auto;
    gap: 0px 0px;
    grid-template-areas:
     "intro1 intro1 intro1 intro1 img img"
    "intro2 intro2 intro2 intro2 img img"
    ". att att att att .";
  }
  @media(max-width:630px) {
    .grid-about {
      grid-template-areas:
     "intro1 intro1 intro1 intro1 intro1 intro1"
    "intro2 intro2 intro2 intro2 img img"
    "att att att att att att";
    }
  }
.grid-intro1 { grid-area: intro1; }
.grid-intro2 { grid-area: intro2; }
.grid-img { grid-area: img;       justify-self: stretch;
}
.grid-att { grid-area: att; }

  
  
`;

export default OwnStyles;
