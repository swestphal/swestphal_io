import React from 'react';
import Layout from './src/components/Layout';
import { EstimateProvider } from './src/components/EstimateContext';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
export function wrapRootElement({ element }) {
  return <EstimateProvider>{element}</EstimateProvider>;
}
