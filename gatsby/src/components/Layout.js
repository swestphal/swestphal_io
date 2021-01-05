import React, { useEffect, useState } from 'react';

import 'normalize.css';
import CookieConsent from 'react-cookie-consent';
import { AiFillCopyrightCircle } from 'react-icons/ai';
import { Link } from 'gatsby';
import ScrollToTop from './ScrollToTop';
import Nav from './Nav';
import Footer from './Footer';
import Contentarea from './Contentarea';
import OwnStyles from '../styles/OwnStyles';
import { StyledLayout } from './Layout.styled';

export default function Layout({ children, location }) {
  useEffect(() => {
    document.getElementById('container').classList.remove('preload');
  });

  return (
    <>
      <CookieConsent
        style={{ background: 'black', alignItems: 'center' }}
        location="bottom"
        buttonText="Yes"
        buttonStyle={{ background: '#fded27' }}
        declineButtonText="No, thanks"
        buttonWrapperClasses="cookie__btn"
        declineButtonStyle={{
          backgroundColor: 'black',
          border: '1px solid white',
        }}
        cookieName="gatsby-gdpr-google-analytics"
        enableDeclineButton
        onDecline={() => {
          console.log('Keine Cookies!');
        }}
      >
        <span style={{ fontSize: '.75em' }}>
          This website stores cookies on your computer in order to use the
          website and improve the content. If you do not agree to this, a single
          cookie remains so that this default setting for the next visit is
          saved.
        </span>
      </CookieConsent>
      <OwnStyles />
      <StyledLayout id="container" className="preload">
        <Nav location={location} />
        <Contentarea content={children} />
      </StyledLayout>
      <div className="sidebar__infos--legal--mb">
        <p className="infos__legal">
          <Link to="/imprint">Imprint</Link>&nbsp;|&nbsp;
          <Link to="/privacy-policy">Privacy Policy</Link>
        </p>
        <p className="infos__copyright">
          <AiFillCopyrightCircle /> {new Date().getFullYear()} Simone Westphal
        </p>
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
}
