import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Nav from './Nav';
import Footer from './Footer';
import Contentarea from './Contentarea';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <div id="container">
        <Nav />
        <Contentarea content={children}></Contentarea>
      </div>
      <Footer />
    </>
  );
}
