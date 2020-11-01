import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Nav from './Nav';
import Footer from './Footer';
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
        <div id="content">{children}</div>
      </div>
      <Footer />
    </>
  );
}
