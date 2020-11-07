import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'normalize.css';
import { masonry } from '../assets/js/masonry';

export default function Contentarea({ content }) {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    const content = document.getElementById('content');
    const bodyHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight,
      containerHeight = document
        .getElementsByClassName('content__inner')[0]
        .getBoundingClientRect().height,
      headerHeight = document.getElementById('sidebar');
    if (bodyHeight > containerHeight) {
      headerHeight.style.height = bodyHeight + 'px';
    } else {
      headerHeight.style.height = containerHeight + 'px';
    }
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener('resize', handleResize);
    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return (
    <>
      <div id="content">
        <div className="content__inner">{content}</div>
      </div>
    </>
  );
}
