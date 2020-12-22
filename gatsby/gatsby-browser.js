import React from 'react';
import Layout from './src/components/Layout';
import { EstimateProvider } from './src/components/EstimateContext';
import './src/styles/fonts.css';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

/* export function wrapRootElement({ element }) {
  return <EstimateProvider>{element}</EstimateProvider>;
} */

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  // Retain scroll position when user is on the projects page
  const pagesToRetainScollPosition = location.pathname.includes('projekte');
  console.log(location.pathname);
  if (
    location.pathname.includes('projekte') &&
    location.pathname !== '/projekte/'
  ) {
    /* no scroll at all
    if (pagesToRetainScollPosition) {
    const currentPosition = getSavedScrollPosition(location);

    window.scrollTo(currentPosition || [0, 0]);
    return false;
    */

    /* only on main projekte page */
    const element = document.querySelector('.projects__container');
    element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    return false;
  }
};
