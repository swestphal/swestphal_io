import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'normalize.css';
import { masonry } from '../assets/js/masonry';

export default function Contentarea({ content }) {
  return (
    <>
      <div id="content">
        <div className="content__inner">{content}</div>
      </div>
    </>
  );
}
