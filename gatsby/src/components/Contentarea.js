import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contentarea({ content }) {
  useEffect(() => {
    // Update the document title using the browser API

    //var $this = $(ReactDOM.findDOMNode(this));
    const content = document.getElementById('content');
    console.log(content);
    const bodyHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight,
      containerHeight = document
        .getElementsByClassName('inner-content')[0]
        .getBoundingClientRect().height,
      headerHeight = document.getElementsByTagName('header')[0];
    console.log(bodyHeight); //ok
    console.log(containerHeight);
    if (bodyHeight > containerHeight) {
      headerHeight.style.height = bodyHeight + 'px';
    } else {
      headerHeight.style.height = containerHeight + 'px';
    }
  });
  return (
    <>
      <div id="content">
        <div className="inner-content">{content}</div>
      </div>
    </>
  );
}
