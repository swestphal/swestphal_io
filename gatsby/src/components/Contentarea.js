import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'normalize.css';

export default function Contentarea({ content }) {
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
  });
  return (
    <>
      <div id="content">
        <div className="content__inner">{content}</div>
      </div>
    </>
  );
}
