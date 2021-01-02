import { createGlobalStyle } from 'styled-components';

/*-------------------------------------------------
 =  Table of Css

 1.Isotope
 2.Header
 3.General code
 4.content
 5.blog page
 6.About page
 7.Contact page
 8.Services page
 9.Single Post page
 10.Single Work page

-------------------------------------------------*/
const GlobalStyles = createGlobalStyle`



/*-------------------------------------------------------*/
/* 1. Isotope filtering
/*-------------------------------------------------------*/
.isotope-item {
    z-index: 2;
}
.isotope-hidden.isotope-item {
    pointer-events: none;
    z-index: 1;
}
.isotope, .isotope .isotope-item {/* change duration value to whatever you like */
    -webkit-transition-duration: 0.8s;
    -moz-transition-duration: 0.8s;
    transition-duration: 0.8s;
}
.isotope {
    -webkit-transition-property: height, width;
    -moz-transition-property: height, width;
    transition-property: height, width;
}
.isotope .isotope-item {
    -webkit-transition-property: -webkit-transform, opacity;
    -moz-transition-property:-moz-transform, opacity;
    transition-property:transform, opacity;
}

/*-------------------------------------------------*/
/* =  Header
/*-------------------------------------------------*/


header {
    display: block;
    width: 300px;
    float: left;
    background: #fff;
    text-align: right;
    z-index: 4;
    position: relative;
    box-shadow: 0 0 10px #000;
    -webkit-box-shadow: 0 0 10px #000;
    -moz-box-shadow: 0 0 10px #000;
    -o-box-shadow: 0 0 10px #000;
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
    -moz-transition: all 0.17s ease-in-out;
    -webkit-transition: all 0.17s ease-in-out;
    -o-transition: all 0.17s ease-in-out;
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
    display: inline-block;
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
    -moz-transition: all 0.3 linear;
    -webkit-transition: all 0.3 linear;
    -o-transition: all 0.3 linear;
    background: #fff;
    border-bottom: 1px dashed #d6d6d6;
    border-right: 1px dashed #d6d6d6;
}

ul.menu li:first-child a {
    border-top: 1px dashed #d6d6d6;
}

ul.menu > li > a.active {
    background: #ffed27;
    border-bottom: 1px dashed #d6d6d6;
}

ul.menu > li > a:hover {
    transition: all 0.15s linear;
    -moz-transition: all 0.15s linear;
    -webkit-transition: all 0.15s linear;
    -o-transition: all 0.15s linear;
    background: #ffed27;
    border-bottom: 1px dashed #d6d6d6;
}

ul.menu > li > a.active:after {
    content:"";
    border-top: 28px solid transparent;
    border-bottom: 29px solid transparent;
    border-left: 20px solid #ffed27;
    position:absolute;
    left:300px;
    top: 0;

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
    -moz-transition: all 0.17s linear;
    -webkit-transition: all 0.17s linear;
    -o-transition: all 0.17s linear;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: rotateY(-90deg);
    -moz-transform: rotateY(-90deg);
    -ms-transform: rotateY(-90deg);
    -o-transform: rotateY(-90deg);
    transform: rotateY(-90deg);
    -webkit-transition: -webkit-transform 0.4s, opacity 0.1s 0.3s;
    -moz-transition: -moz-transform 0.4s, opacity 0.1s 0.3s;
    -mos-transition: -mos-transform 0.4s, opacity 0.1s 0.3s;
    -o-transition: -o-transform 0.4s, opacity 0.1s 0.3s;
}

li.drop:hover > ul.drop-down {
    visibility: visible;
    opacity: 1;
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    transform: rotateY(0deg);
    -webkit-transition: -webkit-transform 0.4s, opacity 0.1s;
    -moz-transition: -moz-transform 0.4s, opacity 0.1s;
    -mos-transition: -mos-transform 0.4s, opacity 0.1s;
    -o-transition: -o-transform 0.4s, opacity 0.1s;
    transition: transform 0.4s, opacity 0.1s;
}

ul.drop-down li {
    position: relative;
}

ul.drop-down li a:hover {
}

.social-box {
    overflow: hidden;
}

ul.social-icons {
    padding: 0;
    margin: 0;
    border-bottom: 1px dashed #d6d6d6;
    padding: 20px;
}

ul.social-icons li {
    list-style: none;
    display: inline-block;
    margin-left: -3px;
}

ul.social-icons li:first-child {
    margin-left: 0px;
}

ul.social-icons li a {
    display: inline-block;
    margin: 0;
    width: 37px;
    height: 37px;
    text-decoration: none;
    line-height: 41px;
    text-align: center;
    transition: all 0.17s ease-in-out;
    -moz-transition: all 0.17s ease-in-out;
    -webkit-transition: all 0.17s ease-in-out;
    -o-transition: all 0.17s ease-in-out;
    background: #000000;
}

ul.social-icons li a.facebook:hover {
    background: #3e5ea2;
}

ul.social-icons li a.twitter:hover {
    background: #2eb0e3;
}

ul.social-icons li a.pinterest:hover {
    background: #f43a2c;
}

ul.social-icons li a.dribble:hover {
    background: #da5f2e;
}



ul.social-icons li a i {
    color: #fff;
    font-size: 20px;
    line-height: 30px;
    transition: all 0.17s ease-in-out;
    -moz-transition: all 0.17s ease-in-out;
    -webkit-transition: all 0.17s ease-in-out;
    -o-transition: all 0.17s ease-in-out;
}

ul.social-icons li a.github i {
    color: #000;
}

.info {
    padding: 20px;
    border-bottom: 1px dashed #d6d6d6;
}

.info a {
    color: #a5a5a5;
    font-size: 14px;
    font-family: 'Courier New';
}
.info i {
    color: #000;
    margin-left: 10px;
}

.info p {
    color: #a5a5a5;
    font-size: 14px;
    font-family: 'Courier New';
    margin-bottom:0;
}

p.copyright {
    color: #6b7072;
    font-size: 12px;
    font-family: 'Courier New';
    margin-top: 20px;
    line-height: 20px;
    padding-right: 20px;
}
/*-------------------------------------------------*/
/* =  General code
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

#container {
    height: 100%;
    opacity: 1;
    transition: all 0.17s ease-in-out;
    -moz-transition: all 0.17s ease-in-out;
    -webkit-transition: all 0.17s ease-in-out;
    -o-transition: all 0.17s ease-in-out;
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
    -moz-transition: all 0.17s ease-in-out;
    -webkit-transition: all 0.17s ease-in-out;
    -o-transition: all 0.17s ease-in-out;
}

.preloader img {
    -webkit-backface-visibility: hidden;
}

/*-------------------------------------------------*/
/* =  content
/*-------------------------------------------------*/

#content {
    position: relative;
    padding-left: 300px;
    height: 100%;
    background: url(../upload/body-bg.jpg) center 0 repeat;
}

.project-post {
    width: 24.99%;
    margin: 0;
    overflow: hidden;
}

.project-post img {
    width: 100%;
}

.view {
    overflow: hidden;
    position: relative;
    cursor: default;
}
.view .mask {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
}
.view img {
    display: block;
    position: relative;
}

.top-post {
    position: absolute;
    top: 25px;
    left: 25px;
}
.view h2 {
    color: #000;
    position: relative;
    font-size: 22px;
    font-family: 'Courier New';
    margin: 0;
}
.view .post-border {
    width: 20px;
    margin: 12px 0;
    border-top: 1px solid #000;
}
.view p {
    font-size: 12px;
    position: relative;
    color: #000;
    font-family: 'Courier New';
    margin: 0;
}

.bottom-post {
    position: absolute;
    bottom: 25px;
    right: 25px;
}

.bottom-post i {
    width: 45px;
    height: 45px;
    display: inline-block;
*display: inline;
*zoom: 1;
    line-height: 45px;
    text-align: center;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 1px solid #000;
    color: #000;
}

.bottom-post i:hover{
    background: #000;
    color: #fff;
    transform:rotate(360deg);
    -ms-transform:rotate(360deg);
    /* IE 9 */
    -moz-transform:rotate(360deg);
    /* Firefox */
    -webkit-transform:rotate(360deg);
    /* Safari and Chrome */
    -o-transform:rotate(360deg);
    /* Opera */
    transition:all 0.3s ease-in-out;
    -moz-transition:all 0.3s ease-in-out;
    -webkit-transition:all 0.3s ease-in-out;
    -o-transition:all 0.3s ease-in-out;
}

.view-first img {
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    -ms-transition: all 0.2s linear;
    transition: all 0.2s linear;
}
.view-first .mask {
    -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    opacity: 0;
    background-color: rgb(250,231,46);
    background-color: rgba(250,231,46, 0.9);
    -webkit-transition: all 0.4s ease-in-out;
    -moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -ms-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
}
.view-first h2 {
    -webkit-transform: translateY(-100px);
    -moz-transform: translateY(-100px);
    -o-transform: translateY(-100px);
    -ms-transform: translateY(-100px);
    transform: translateY(-100px);
    -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    opacity: 0;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}
.view-first p {
    -webkit-transform: translateY(100px);
    -moz-transform: translateY(100px);
    -o-transform: translateY(100px);
    -ms-transform: translateY(100px);
    transform: translateY(100px);
    -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    opacity: 0;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    -ms-transition: all 0.2s linear;
    transition: all 0.2s linear;
}
.view-first:hover img {
    -webkit-transform: scale(1.1,1.1);
    -moz-transform: scale(1.1,1.1);
    -o-transform: scale(1.1,1.1);
    -ms-transform: scale(1.1,1.1);
    transform: scale(1.1,1.1);
}
.view-first a.info {
    -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    opacity: 0;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
}
.view-first:hover .mask {
    -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=100)";
    filter: alpha(opacity=100);
    opacity: 1;
}
.view-first:hover h2,
.view-first:hover p,
.view-first:hover a.info {
    -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=100)";
    filter: alpha(opacity=100);
    opacity: 1;
    -webkit-transform: translateY(0px);
    -moz-transform: translateY(0px);
    -o-transform: translateY(0px);
    -ms-transform: translateY(0px);
    transform: translateY(0px);
}
.view-first:hover p {
    -webkit-transition-delay: 0.1s;
    -moz-transition-delay: 0.1s;
    -o-transition-delay: 0.1s;
    -ms-transition-delay: 0.1s;
    transition-delay: 0.1s;
}
.view-first:hover a.info {
    -webkit-transition-delay: 0.2s;
    -moz-transition-delay: 0.2s;
    -o-transition-delay: 0.2s;
    -ms-transition-delay: 0.2s;
    transition-delay: 0.2s;
}



.project-post .hover-box {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(36,176,174,0.9);
    text-align: center;
    top: 0;
    left: 0;
    visibility: hidden\0/;
    transition: all 0.33s ease-in-out;
    -moz-transition: all 0.33s ease-in-out;
    -webkit-transition: all 0.33s ease-in-out;
    -o-transition: all 0.33s ease-in-out;
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: rotateX(-90deg) rotateY(-90deg);
    -moz-transform: rotateX(-90deg) rotateY(-90deg);
    -ms-transform: rotateX(-90deg) rotateY(-90deg);
    -o-transform: rotateX(-90deg) rotateY(-90deg);
    transform: rotateX(-90deg) rotateY(-90deg);
}

.project-post:hover .hover-box {
    visibility: visible\0/;
    -webkit-transform: rotateX(0deg) rotateY(0deg);
    -moz-transform: rotateX(0deg) rotateY(0deg);
    -ms-transform: rotateX(0deg) rotateY(0deg);
    -o-transform: rotateX(0deg) rotateY(0deg);
    transform: rotateX(0deg) rotateY(0deg);
}

.nicescroll-rails {
    z-index: 999999!important;
}

.project-title {
    position: absolute;
    z-index: 2;
    left: 0;
    width: 100%;
    top: 50%;
    margin-top: -75px;
}

.project-title h2 {
    color: #fff;
    font-size: 24px;
    font-family: 'Courier New', sans-serif;
    font-weight: 300;
    line-height: 30px;
    margin: 0;
}

.project-title span {
    display: inline-block;
    color: #fff;
    font-size: 12px;
    font-family: 'Courier New', sans-serif;
    font-weight: 300;
    padding-bottom: 12px;
    border-bottom: 1px solid #fff;
    margin: 0 0 18px;
}

.project-title a {
    display: inline-block;
    clear: both;
    width: 61px;
    height: 61px;
    border: 1px solid #fff;
    text-align: center;
    text-decoration: none;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -o-border-radius: 50%;
    transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
}

.project-title a:hover {
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -o-transform: scale(1.2);
    -ms-transform: scale(1.2);
}

.project-title a i {
    color: #fff;
    font-size: 18px;
    line-height: 61px;
}

/*-------------------------------------------------*/
/* =  blog-page
/*-------------------------------------------------*/


.blog-page {
    padding: 12px;
    margin: 0;
    overflow: hidden;
    position: relative;
}

.blog-post {
    width: 20%;
    padding: 12px;
}


.blog-post .flexslider {
    margin: 0 !important;
}

.inner-post {
    box-shadow: 0 0 8px #787878;
}

.blog-post img {
    width: 100%;
    border-radius: 0 !important;
    -webkit-border-radius: 0 !important;
    -moz-border-radius: 0 !important;
    -o-border-radius: 0 !important;
}

.post-content {
    background: #fff;
    padding: 15px 20px;
}

.post-content h2 {
    color: #000;
    font-size: 18px;
    font-family: 'Courier New', sans-serif;
    font-weight: 300;
    line-height: 26px;
    margin: 0 0 4px;
}

.post-content h2 a {
    color: #000;
}

.post-content p {
    color: #9c9c9c;
    font-size: 13px;
    font-family: 'Courier New', sans-serif;
    font-weight: 300;
    line-height: 22px;
    margin: 0;
}

.post-tags {
    padding: 15px 20px;
    background: #fff;
    margin: 0;
    border-top: 1px dashed #cccccc;
}

.post-tags li {
    display: inline-block;
    margin-right: 10px;
}

.post-tags li:last-child {
    margin-right: 0px;
}

.post-tags li a {
    display: inline-block;
    color: #9a9a9a;
    font-size: 12px;
    font-family: 'Courier New', sans-serif;
    font-weight: 300;
    text-decoration: none;
    line-height: 22px;
}

.post-tags a:hover {
    color: #000;
}

.post-tags li a i {
    color: #aeadad;
    font-size: 13px;
    margin-right: 4px;
    border:1px solid #cdcdcd;
    padding: 8px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
}


.link-post .post-content {
    background: #ffed27;
    padding: 20px 30px;
    text-align: center;
}

.link-post .post-content p {
    color: #000;
    font-size: 14px;
    line-height: 18px;
    margin: 0;
    font-family: 'Courier New';
    margin-bottom: 15px;
}

.link-post .post-content a {
    display: inline-block;
    color: #000;
    font-size: 13px;
    font-family: 'Courier New';
    margin: 0;
    border:1px solid #000;
    padding:8px;
}

.video-post iframe {
    display: block;
    width: 100%;
    height: 185px;
    border: none;
    margin: 0;
}

.quote-post .post-content {
    background: #1d1d1d;
    text-align: center;
    padding: 30px 34px;
}

.quote-post blockquote {
    position: relative;
    border: none;
    color: #fff;
    font-size: 17px;
    font-family: 'Courier New';
    line-height: 26px;
    padding: 0;
    margin-bottom: 40px;
}

.quote-post blockquote:after {
    position: absolute;
    width: 23px;
    height: 17px;
    top: 100%;
    margin-top: 12px;
    left: 50%;
    margin-left: -9px;
    background: url('../images/quote.png') center center no-repeat;
}

.quote-post span {
    color: #f5e326;
    font-size: 18px;
    font-family: 'Courier New', sans-serif;
    font-weight: 300;
    margin: 0;
}

.aside-post .post-content {
    background: #1d1d1d;
    padding: 18px 25px;
    border-left: 15px solid #ffed27;
}

.aside-post .post-content h2 {
    color: #fff;
}

.aside-post .post-content p {
    color: #9c9c9c;
    margin-bottom: 0;
}

.photo-post a {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 61px;
    height: 61px;
    margin-top: -30px;
    margin-left: -30px;
    border: 1px solid #000;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -o-border-radius: 50%;
    text-align: center;
    text-decoration: none;
    line-height: 62px;
    font-family: 'Courier New', sans-serif;
    font-size: 18px;
    color: #000;
    font-weight: 300;
    transition: all 0.17s ease-in-out;
    -moz-transition: all 0.17s ease-in-out;
    -webkit-transition: all 0.17s ease-in-out;
    -o-transition: all 0.17s ease-in-out;
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
    -moz-transform: scale(0.0);
    -o-transform: scale(0.0);
    -ms-transform: scale(0.0);
}

.photo-post:hover a {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
    -moz-transform: scale(1.0);
    -o-transform: scale(1.0);
    -ms-transform: scale(1.0);
}

.photo-post a:hover {
    background: #000;
    color: #fff;
    transform:rotate(360deg);
    -ms-transform:rotate(360deg);
    /* IE 9 */
    -moz-transform:rotate(360deg);
    /* Firefox */
    -webkit-transform:rotate(360deg);
    /* Safari and Chrome */
    -o-transform:rotate(360deg);
    /* Opera */
    transition:all 0.3s ease-in-out;
    -moz-transition:all 0.3s ease-in-out;
    -webkit-transition:all 0.3s ease-in-out;
    -o-transition:all 0.3s ease-in-out;
}

.mfp-zoom-out-cur .mfp-image-holder .mfp-close {
    outline: none;
}

.blog-page-link {
    border:10px solid rgb(0,0,0);
    border:10px solid rgba(0,0,0,.2);
    display: block;
    margin: 13px auto;
    width: 185px;
    padding: 16px;
    background: #fff;
    color: #000 !important;
    font-size: 20px;
    font-family: 'Courier New', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none!important;
    transition: all 0.17s ease-in-out;
    -moz-transition: all 0.17s ease-in-out;
    -webkit-transition: all 0.17s ease-in-out;
    -o-transition: all 0.17s ease-in-out;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
}

/*-------------------------------------------------*/
/* =  project-page
/*-------------------------------------------------*/



.sidebar {
    width: 50%;
    float: left;
    padding: 25px;
}

.sidebar h1 {
    color: #000;
    font-size: 24px;
    font-family: 'Courier New', sans-serif;
    font-weight: 300;
    margin: 0 0 5px;
    line-height: 30px;
}



/*-------------------------------------------------*/
/* =  about-page
/*-------------------------------------------------*/

.inner-content {
    background: url(../upload/body-bg.jpg) center 0 repeat;
}
.inner-content2 {
    background: url(../upload/body-bg2.jpg) center 0 repeat;
}

.about-page {
    padding: 30px;
}

.about-box {
    background: #fff;
    overflow: hidden;
}

.about-content {
    width: 50%;
    float: left;
    padding: 30px 30px 0;
    border-right: 1px solid #e5e5e5;
}

.about-section > img {
    width: 100%;
    margin-bottom: 20px;
}

.about-section h1 {
    color: #000;
    font-size: 24px;
    font-family: 'Courier New', sans-serif;
    font-weight: 300;
    margin: 0 0 5px;
    line-height: 30px;
}

.about-section {
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 20px;
}

.about-section p {
    font-size: 15px;
    color: #a3a3a3;
    font-family: 'Courier New';
    line-height: 23px;
}

.last-section {
    border: none;
    margin: 0;
}

.last-section h1 {
    margin-bottom: 20px;
}

.team-post {
    position: relative;
    margin-bottom: 30px;
    overflow: hidden;
}

.team-post img {
    width: 100%;
    -webkit-backface-visibility: hidden;
}

.team-hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffed27;
    background: rgba(255,237,39,0.9);
    text-align: center;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -o-border-radius: 50%;
    transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transform: scale(0);
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -o-transform: scale(0);
    overflow: hidden;
}

.team-post:hover .team-hover {
    border-radius: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -o-border-radius: 0;
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
}

.team-data {
    position: relative;
    top: 50%;
    margin-top: -16px;
}

.team-post h3 {
    color: #000;
    font-size: 16px;
    font-family: 'Courier New', sans-serif;
    line-height: 16px;
    text-transform: uppercase;
    margin: 0;
}

.team-post span {
    color: #000;
    font-size: 13px;
    font-family: 'Courier New', sans-serif;
    font-weight: 300;
    line-height: 16px;
    margin: 0;
}

.skills-progress {
    margin-bottom: 30px;
}

.skills-progress p {
    color: #000000;
    font-size: 13px;
    font-family: 'Courier New', sans-serif;
    font-weight: 300;
    line-height: 26px;
    clear: both;
    margin-bottom: 0px;
}

.skills-progress p span {
    font-size: 14px;
    float: right;
}

.meter {
    height: 33px;  /* Can be anything */
    position: relative;
    background: #fff;
    border: 1px solid #dbdbdb;
    margin-bottom: 12px;
}

.meter > span {
    display: block;
    height: 100%;
    position: relative;
    overflow: hidden;
    background: url('../images/skills-pattern.png');
}

.client-test {
    overflow: hidden;
}

.client-test img {
    float: left;
    max-width: 80px;
    margin-right: 24px;
}

.client-test h3 {
    color: #000;
    font-size: 15px;
    font-family: 'Courier New', sans-serif;
    padding: 27px 25px;
    margin: 0;
    margin-left: 80px;
    line-height: 26px;
    background: #ffed27;
}

.testimonial p {
    color: #a3a3a3;
    font-size: 18px;
    font-family: 'Courier New', sans-serif;
    font-weight: 300;
    line-height: 30px;
    margin: 0;
    padding: 16px 30px;
    border: 1px solid #ececec;
}

.testimonial {
    margin-bottom: 25px;
}

.skills-progress h1 {
    margin-bottom: 6px;
}

.services h1 {
    margin-bottom: 6px;
}

.services ul li a {
    display: inline-block;
    color: #848484;
    font-size: 14px;
    font-family: 'Courier New', sans-serif;
    font-weight: 300;
    line-height: 28px;
    text-decoration: none;
}

.services ul li {
    position: relative;
    padding-left: 11px;
}

.services ul li:before {
    content: '';
    width: 4px;
    height: 4px;
    background: #848484;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -o-border-radius: 50%;
    top: 12px;
    left: 0;
    margin-right: 7px;
    position: absolute;
}

/*-------------------------------------------------*/
/* =  contact-page
/*-------------------------------------------------*/

.contact-page {
    padding-top: 30px;
}

#map {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    filter: grayscale(100%); /* Current draft standard */
    -webkit-filter: grayscale(100%); /* New WebKit */
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
}

.contact-box {
    position: relative;
    z-index: 3;
    margin: 0 30px 30px;
    padding: 30px;
    background: #fff;
    max-width: 780px;
    overflow: hidden;
}

.contact-info {
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 20px;
}

.contact-box h1 {
    color: #000000;
    font-size: 24px;
    font-family: 'Courier New', sans-serif;
    font-weight: 300;
    line-height: 26px;
    margin: 0 0 10px;
}

#contact-form h1,
.comment-form h1 {
    margin: 0 0 20px;
}

.contact-info p {
    color: #a3a3a3;
    font-size: 18px;
    font-family: 'Courier New', sans-serif;
    font-weight: 300;
    line-height: 30px;
    margin: 0 0 20px;
}

#contact-form {
    overflow: hidden;
}

.text-fields {
    float: left;
    width: 50%;
    padding-right: 10px;
}

.submit-area {
    float: right;
    width: 50%;
}

.comment-form {
    overflow: hidden;
}

.float-input {
    position: relative;
    padding-left: 58px;
}

.float-input span {
    position: absolute;
    width: 58px;
    height: 58px;
    border: 1px solid #eaeaea;
    top: 0px;
    left: 0px;
    z-index: 2;
    text-align: center;
}

.float-input span i {
    line-height: 32px;
    font-size: 12px;
    color: #585858;
    display: inline-block;
    width: 32px;
    height: 32px;
    text-align: center;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -o-border-radius: 50%;
    border: 1px solid #585858;
    margin-top: 13px;
    transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
}

#contact-form input[type="text"],
#contact-form textarea,
.comment-form input[type="text"],
.comment-form textarea {
    color: #848484;
    font-size: 14px;
    font-family: 'Courier New', sans-serif;
    border: 1px solid #eaeaea;
    border-left: none;
    font-weight: 300;
    border-radius: 0px;
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    -o-border-radius: 0px;
    outline: none;
    width: 100%;
    padding: 18px;
    display: block;
    margin-bottom: 10px;
    transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
}

#contact-form input[type="text"]:focus + span i,
.comment-form input[type="text"]:focus + span i {
    color: #000;
    background: #ffed27;
    border: 1px solid #ffed27;
}

#contact-form textarea,
.comment-form textarea {
    height: 126px;
    border: 1px solid #eaeaea;
}

#contact-form input[type="submit"],
.comment-form input[type="submit"] {
    width: 100%;
    text-align: center;
    color: #000;
    font-size: 19px;
    font-family: 'Courier New', sans-serif;
    font-weight: 300;
    padding: 15px;
    background: #ffed27;
    text-transform: uppercase;
    border: none;
    transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
}

#contact-form input[type="submit"]:hover,
.comment-form input[type="submit"]:hover {
    opacity: 0.8;
}

#contact-form .message,
.comment-form .message {
    height:20px;
    font-size:13px;
    font-family: 'Open Sans', sans-serif;
    float: none;
    margin-top: 5px;
}

#contact-form .message.error,
.comment-form .message.error {
    color:#eb2c06;
}

#contact-form .message.success,
.comment-form .message.success {
    color:#1e9397;
}

/*Services*/

/*-------------------------------------------------*/
/* =  Tabs Widget
/*-------------------------------------------------*/

.service-content {
    padding: 30px 30px 0;
}

.service-section {
}

.border {
    border-bottom: 1px solid #e5e5e5;
    margin: 10px 0 20px;
}

.service-section h1 {
    color: #000;
    font-size: 24px;
    font-family: 'Courier New', sans-serif;
    font-weight: 300;
    margin: 0 0 5px;
    line-height: 30px;
}

.service-section p {
    color: #a3a3a3;
    font-size: 15px;
    font-family: 'Courier New', sans-serif;
    margin: 0 0 20px;
    line-height: 22px;
}

.service-section img {
    float: left;
    margin-right: 20px;
}

.offer-section {
    padding-bottom: 10px;
}

.offer-section h1 {
    margin-bottom: 20px;
}

.service-item {
    background: #ffed27;
    text-align: center;
    padding: 30px 0px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    margin-bottom: 20px;


    transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
}

.service-item i {
    font-size: 30px;
    color: #000;
}

.service-item .serv-border {
    width: 70px;
    margin: 20px auto;
    border-top: 1px solid #000;
}

.service-item h3 {
    color: #000;
    font-size: 22px;
    font-family: 'Roboto';
    font-weight: 100;
    margin: 0;
}

.service-item:hover {
    background: #000;
}

.service-item:hover .serv-border {
    border-top: 1px solid #ffed27;
    -webkit-animation: moveFromTop 300ms ease;
    -moz-animation: moveFromTop 300ms ease;
    -ms-animation: moveFromTop 300ms ease;

}
.service-item:hover h3 {
    color: #ffed27;
    -webkit-animation: moveFromBottom 500ms ease;
    -moz-animation: moveFromBottom 500ms ease;
    -ms-animation: moveFromBottom 500ms ease;

}
.service-item:hover i {
    color: #ffed27;
    -webkit-animation: moveFromTop 400ms ease;
    -moz-animation: moveFromTop 400ms ease;
    -ms-animation: moveFromTop 400ms ease;
}
@-webkit-keyframes moveFromTop {
    from {
        -webkit-transform: translateY(-300%);
    }
    to {
        -webkit-transform: translateY(0%);
    }
}
@-moz-keyframes moveFromTop {
    from {
        -moz-transform: translateY(-300%);
    }
    to {
        -moz-transform: translateY(0%);
    }
}
@-ms-keyframes moveFromTop {
    from {
        -ms-transform: translateY(-300%);
    }
    to {
        -ms-transform: translateY(0%);
    }
}

@-webkit-keyframes moveFromBottom {
    from {
        -webkit-transform: translateY(200%);
    }
    to {
        -webkit-transform: translateY(0%);
    }
}
@-moz-keyframes moveFromBottom {
    from {
        -moz-transform: translateY(200%);
    }
    to {
        -moz-transform: translateY(0%);
    }
}
@-ms-keyframes moveFromBottom {
    from {
        -ms-transform: translateY(200%);
    }
    to {
        -ms-transform: translateY(0%);
    }
}

.tabs {
    padding-bottom: 0;
    border: 0;
}

.tabs h1 {
    margin-bottom: 20px;
}

.tabs ul {
    padding: 0;
}

.tabs-widget {
    padding: 0px !important;
    margin-bottom: 20px;
    border: 1px solid #dbdbdb;
}

.tabs-widget .tab-links {
    margin: 0;
    border-bottom: 1px solid #dbdbdb;
}

.tabs-widget .tab-links li {
    float: left;
    background: #ffffff;
    color: #808080;
    width: 33.3%;
    height: 65px;
    border-right: 1px solid #dbdbdb;
}

.tabs-widget .tab-links li.active {
    background: #ffed27;
}

.tabs-widget .tab-links li.active a{
    color: #000;
}

.tabs-widget .tab-links li:first-child {
    margin-left: 0px;
}
.tabs-widget .tab-links li:last-child {
    border-right: 0;
}

.tabs-widget .tab-links li a {
    font-family: 'Courier New';
    color: #000;
    font-size: 13px;
    text-transform: uppercase;
    padding: 15px;
    text-align: center;
    display: block;
    transition: none;
    -moz-transition: none;
    -webkit-transition: none;
    -o-transition: none;
    line-height: 36px;
}

.tabs-widget .tab-links li a:hover {
    text-decoration: none;
}



.tabs-widget > div {
    clear: both;
    display: none;
}

.tabs-widget > div > ul {
    margin: 0;
}

.tabs-widget #popular-tab {
    display: block;
}

.tabs-widget .author-comment {
    color: #7f7f7f;
    font-size: 11px;
    line-height: 14px;
    max-height: 42px;
    overflow: hidden;
    display: block;
}


.tabs-widget > div li {
    overflow: hidden;
    border-top: none;
    background: #fff;
    padding-bottom: 0;
    padding: 20px 20px 10px;
}


.tabs-widget > div li > a {
    display: block;
}

.tabs-widget img {
    float: left;
    width: 44px;
    height: 44px;
    margin-right: 14px;
}

.tabs-widget > div h3 {
    font-family: 'Open Sans';
    margin: 0 0 3px 0px;
    line-height: 19px;
    max-height: 34px;
    overflow: hidden;
}

.tabs-widget > div h3 a {
    color: #506779;
    display: block;
    font-size: 13px;
}

.tabs-widget > div h3 a:hover {
    opacity: 0.8;
    text-decoration: none;
}

.tabs-widget > div#comments-tab h3 {
    max-height: 15px;
}

.tabs-widget > div p{
    font-size: 14px;
    color: #808080;
    line-height: 20px;
    margin: 0;
    margin-bottom: 30px;
}


.tabs-widget ul{
    list-style: none;
}

/*-------------------------------------------------*/
/* =  project-page
/*-------------------------------------------------*/

.single-project {
    padding: 30px;
}

.single-box {
    background: #fff;
    overflow: hidden;
}

.single-box-content {
    width: 100%;
    float: none;
}

.sidebar {
    width: 50%;
    float: left;
    padding: 25px;
}

.project-post-content {
    padding: 25px 30px 30px;
}

.project-post-content h1,
.sidebar h1 {
    color: #000;
    font-size: 24px;
    font-family: 'Courier New', sans-serif;
    font-weight: 300;
    margin: 0 0 7px;
    line-height: 30px;
}

.project-post-content p,
.about-section p {
    color: #a3a3a3;
    font-size: 18px;
    font-family: 'Courier New', sans-serif;
    font-weight: 300;
    margin: 0 0 25px;
    line-height: 30px;
}

.project-text {
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 20px;
    padding-bottom: 20px;
}

.project-text i {
    display: inline-block;
    color: #000;
    border: 1px solid #000;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin-right: 10px;
}

.project-text a {
    font-family: 'Roboto';
    color: #848484;
    font-size: 14px;
    margin-right: 20px;

}

.similar-projects h1 {
    margin-bottom: 20px;
}

.similar-projects .project-post {
    width: 49.9%;
}

.sidebar h1 {
    margin-bottom: 17px;
}

.post-info {
    margin-bottom: 26px;
}

.post-info ul li {
    padding: 14px 0;
    border-bottom: 1px solid #e5e5e5;
}

.post-info ul li:first-child {
    padding: 0 0 14px;
}

.post-info ul li span {
    display: inline-block;
    width: 32px;
    height: 32px;
    border: 1px solid #1ab5b3;
    text-align: center;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -o-border-radius: 50%;
    margin-right: 14px;
}

.post-info ul li span i {
    color: #1ab5b3;
    line-height: 32px;
    font-size: 12px;
}

.post-info ul li a {
    text-decoration: none;
    display: inline-block;
    color: #848484;
    font-size: 14px;
    font-family: 'Courier New', sans-serif;
    font-weight: 300;
    line-height: 32px;
}

.project-gallery .view a {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    margin-top: -24px;
    margin-left: -20px;
    border: 1px solid #000;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -o-border-radius: 50%;
    text-align: center;
    text-decoration: none;
    line-height: 40px;
    font-family: 'Courier New', sans-serif;
    font-size: 13px;
    color: #000;
    font-weight: 300;
    transition: all 0.17s ease-in-out;
    -moz-transition: all 0.17s ease-in-out;
    -webkit-transition: all 0.17s ease-in-out;
    -o-transition: all 0.17s ease-in-out;
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
    -moz-transform: scale(0.0);
    -o-transform: scale(0.0);
    -ms-transform: scale(0.0);
}

.project-gallery .view:hover a {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
    -moz-transform: scale(1.0);
    -o-transform: scale(1.0);
    -ms-transform: scale(1.0);
}

.project-gallery .view a:hover {
    background: #000;
    color: #fff;
    transform:rotate(360deg);
    -ms-transform:rotate(360deg);
    /* IE 9 */
    -moz-transform:rotate(360deg);
    /* Firefox */
    -webkit-transform:rotate(360deg);
    /* Safari and Chrome */
    -o-transform:rotate(360deg);
    /* Opera */
    transition:all 0.3s ease-in-out;
    -moz-transition:all 0.3s ease-in-out;
    -webkit-transition:all 0.3s ease-in-out;
    -o-transition:all 0.3s ease-in-out;
}

.project-gallery .view {
    margin-bottom: 20px;
}

.project-gallery .view img {
    width: 100%;
}



/*-------------------------------------------------*/
/* =  single post
/*-------------------------------------------------*/

.tags-box {
    margin-bottom: 16px;
}

.tags-box ul li {
    display: inline-block;
    margin-right: 8px;
    margin-bottom: 10px;
}

.tags-box ul li a {
    display: inline-block;
    color: #a3a3a3;
    font-size: 13px;
    font-family: 'Courier New', sans-serif;
    font-weight: 300;
    padding: 9px 17px;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    border: 1px solid #dbdbdb;
    text-decoration: none;
    transition: all 0.17s ease-in-out;
    -moz-transition: all 0.17s ease-in-out;
    -webkit-transition: all 0.17s ease-in-out;
    -o-transition: all 0.17s ease-in-out;
}

.tags-box ul li a:hover {
    color: #1ab5b3;
    border: 1px solid #1ab5b3;
}

.archives-sidebar ul li a {
    display: inline-block;
    color: #848484;
    font-size: 14px;
    font-family: 'Courier New', sans-serif;
    font-weight: 300;
    text-decoration: none;
    line-height: 28px;
    transition: all 0.17s ease-in-out;
    -moz-transition: all 0.17s ease-in-out;
    -webkit-transition: all 0.17s ease-in-out;
    -o-transition: all 0.17s ease-in-out;
}

.archives-sidebar h1 {
    margin-bottom: 5px;
}

.archives-sidebar ul li a:hover {
    color: #000;
}

.comment-section h1 {
    margin-bottom: 15px;
}

.comment-box {
    overflow: hidden;
    margin-bottom: 30px;
}

.comment-box img {
    float: left;
    max-width: 80px;
}

ul.depth {
    margin-left: 100px;
}

ul.depth li {
    position: relative;
}

ul.depth li:before {
    position: absolute;
    content: '';
    width: 40px;
    height: 40px;
    top: 0;
    left: -60px;
    border-left: 1px solid #dddddd;
    border-bottom: 1px solid #dddddd;
}

.comment-content {
    padding-left: 100px;
}

.comment-content h6 {
    color: #3c3c3c;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    line-height: 22px;
    border-bottom: 1px solid #e5e5e5;
    display: inline-block;
    margin: -4px 0 7px;
    padding-bottom: 4px;
    font-weight: 400;
}

.comment-content h6 span {
    color: #d1d1d1;
    font-style: normal;
}

.comment-content p {
    color: #a3a3a3;
    line-height: 26px;
    font-family: 'Roboto';
}


`;

export default GlobalStyles;
