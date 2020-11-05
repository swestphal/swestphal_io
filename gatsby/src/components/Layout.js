import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Nav from './Nav';
import Footer from './Footer';
import Contentarea from './Contentarea';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '../styles/Typography';
import GlobalStyles from '../styles/GlobalStyles';
import OwnStyles from '../styles/OwnStyles';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <OwnStyles />
      <Typography />
      <div id="container">
        <Nav />
        <Contentarea content={children}></Contentarea>
      </div>
      <Footer />
    </>
  );
}
