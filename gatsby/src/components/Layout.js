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
        buttonText="Ok, verstanden"
        buttonStyle={{ background: '#fded27' }}
        declineButtonText="Nein danke"
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
          Diese Webseite speichert Cookies auf Ihrem Computer, um die Webseite
          und die Inhalte zu verbessern. Wenn Sie diesem nicht zustimmen
          verbleibt ein einzelner Cookie, damit diese Voreinstellung für den
          nächsten Besuch gespeichert ist.
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
