import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'normalize.css';
import { masonry } from '../assets/js/masonry';

export default function Contentarea({ content }) {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  return (
    <>
      <div id="content">
        <div className="content__inner">{content}</div>
      </div>
    </>
  );
}
