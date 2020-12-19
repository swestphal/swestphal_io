import React, { useEffect, useState } from 'react';

import 'normalize.css';
import CookieConsent from 'react-cookie-consent';
import Nav from './Nav';
import Footer from './Footer';
import Contentarea from './Contentarea';
import Typography from '../styles/Typography';

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
      <Footer />
    </>
  );
}
