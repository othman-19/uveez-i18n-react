/* eslint-disable react/prop-types */
import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import MovieList from '../containers/MovieList';

const Movies = ({ match }) => (
  <div>
    <Row
      style={{ marginBottom: '20px' }}
      className="justify-content-between"
    >
      <Col xs={12} md={9}>
        <h2>Movies</h2>
      </Col>

      <Col xs={12} md={3}>
        <Link
          to={`${match.url}/new`}
          className="btn btn-primary btn-block"
        >
          Add Movie
        </Link>
      </Col>
    </Row>

    <MovieList />
  </div>
);

export default Movies;
