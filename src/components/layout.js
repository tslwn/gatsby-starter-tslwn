/** @jsx jsx */
import { Styled, jsx } from 'theme-ui';
import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';

const Layout = ({ children }) => {
  return (
    <Styled.root>
      <div
        sx={{
          fontFamily: `body`,
          margin: `0 auto`,
          maxWidth: 960,
          padding: 3,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
    </Styled.root>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
