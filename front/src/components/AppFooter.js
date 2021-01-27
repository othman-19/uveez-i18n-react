/* eslint-disable react/no-danger */
import React from 'react';
import { Navbar, Nav } from 'reactstrap';

import { t } from '../services/i18n';

const Footer = () => (
  <Navbar light color="light" className="mt-5">
    <Nav className="m-auto">
      <span
        className="navbar-text small"
        dangerouslySetInnerHTML={{
          __html: t('footer_copy', {
            author_url: 'https://ashour.ca',
            react_url: 'https://reactjs.org/',
            license_url: 'https://github.com/ashour/react-i18n-demo/blob/master/LICENSE',
            article_url: '#',
          }),
        }}
      />
    </Nav>
  </Navbar>
);

export default Footer;
