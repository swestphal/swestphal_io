import React, { useState } from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Nav from './Nav';
import Footer from './Footer';
import Contentarea from './Contentarea';
import Typography from '../styles/Typography';

import OwnStyles from '../styles/OwnStyles';

export default function Layout({ children }) {
  return (
    <>
      <OwnStyles />
      <Typography />
      <div id="container">
        <Nav />
        <Contentarea content={children} />
      </div>
      <Footer />
    </>
  );
}
