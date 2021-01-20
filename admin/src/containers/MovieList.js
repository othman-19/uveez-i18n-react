/* eslint-disable react/prop-types */
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { fetchMovies } from '../actions';

class MovieList extends Component {
  componentDidMount() {
    const { fetchMovies } = this.props;
    fetchMovies();
  }

  render() {
    const { movies } = this.props;
    return (
      <Table>
        <thead className="thead-dark">
          <tr>
            <th>id</th>
            <th>Featured</th>
            <th>Published</th>
            <th className="text-right">Title (Arabic)</th>
            <th>Title (English)</th>
            <th>Title (French)</th>
            <th>Director</th>
          </tr>
        </thead>

        <tbody>
          {movies.sort((a, b) => a.id - b.id).map(movie => (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td className="text-center">{movie.is_featured ? '✔︎' : ''}</td>
              <td>{movie.published_on}</td>
              <td className="text-right">{movie.title_ar}</td>
              <td>{movie.title_en}</td>
              <td>{movie.title_fr}</td>
              <td>{movie.director.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default connect(
  state => ({ movies: state.movies.movies }),
  { fetchMovies },
)(MovieList);
