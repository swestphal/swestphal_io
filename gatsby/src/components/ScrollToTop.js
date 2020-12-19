import React, { useState } from 'react';

import { AiTwotoneRocket } from 'react-icons/ai';
import { StyledScrollToTop } from './ScrollToTop.styled';

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false);
      document.getElementById('ScrollRocket').classList.remove('active');
    }
  };

  const scrollTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    document.getElementById('ScrollRocket').classList.add('active');
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', checkScrollTop);
  }
  return (
    <StyledScrollToTop id="ScrollRocket">
      <AiTwotoneRocket
        onClick={scrollTop}
        style={{ display: showScroll ? 'flex' : 'none' }}
      />
    </StyledScrollToTop>
  );
};

export default ScrollToTop;
