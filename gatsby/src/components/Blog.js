import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { masonry } from '../assets/js/masonry';
export default function Blog({ content }) {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    masonry();
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      masonry();
    }
    window.addEventListener('resize', handleResize);
    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return (
    <>
      <div className="masonry-root">
        <div className="masonry-cell">
          <div className="masonry-item">1</div>
        </div>
        <div className="masonry-cell">
          <div className="masonry-item">2</div>
        </div>
        <div className="masonry-cell">
          <div className="masonry-item">3</div>
        </div>
        <div className="masonry-cell">
          <div className="masonry-item">4</div>
        </div>
        <div className="masonry-cell">
          <div className="masonry-item">5</div>
        </div>
        <div className="masonry-cell">
          <div className="masonry-item">6</div>
        </div>
        <div className="masonry-cell">
          <div className="masonry-item">7</div>
        </div>
        <div className="masonry-cell">
          <div className="masonry-item">8</div>
        </div>
        <div className="masonry-cell">
          <div className="masonry-item">9</div>
        </div>
        <div className="masonry-cell">
          <div className="masonry-item">10</div>
        </div>
        <div className="masonry-cell">
          <div className="masonry-item">11</div>
        </div>
        <div className="masonry-cell">
          <div className="masonry-item">12</div>
        </div>
        <div className="masonry-cell">
          <div className="masonry-item">13</div>
        </div>
        <div className="masonry-cell">
          <div className="masonry-item">14</div>
        </div>
        <div className="masonry-cell">
          <div className="masonry-item">15</div>
        </div>
        <div className="masonry-cell">
          <div className="masonry-item">16</div>
        </div>
        <div className="masonry-cell">
          <div className="masonry-item">17</div>
        </div>
        <div className="masonry-cell">
          <div className="masonry-item">18</div>
        </div>
        <div className="masonry-cell">
          <div className="masonry-item">19</div>
        </div>
        <div className="masonry-cell">
          <div className="masonry-item">20</div>
        </div>
      </div>
    </>
  );
}
