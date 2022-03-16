import * as React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Navigation from './Nav';

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
