/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

import { prefixPath } from '../services/util';

const LocalizedLink = props => {
  const {
    to,
    locale,
    className,
    children,
  } = props;

  return (
    <Link
      className={className}
      to={prefixPath(to, locale)}
    >
      {children}
    </Link>
  );
};

export default connect(
  state => ({ locale: state.l10n.locale }),
)(LocalizedLink);
