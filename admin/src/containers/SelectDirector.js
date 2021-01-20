/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

import { fetchDirectors, selectDirector } from '../actions';

class SelectDirector extends Component {
  componentDidMount() {
    const { fetchDirectors } = this.props;
    fetchDirectors();
  }

  _onChange(e) {
    const { selectDirector } = this.props;
    selectDirector(e.target.value);
  }

  render() {
    const { selectedId, directors } = this.props;
    return (
      <FormGroup>
        <Label
          for="director"
          className="h4"
        >
          Director
        </Label>

        <Input
          type="select"
          id="director"
          name="director"
          value={selectedId}
          onChange={e => this._onChange(e)}
        >
          {directors.map(director => (
            <option key={director.id} value={director.id}>
              {director.name_en}
            </option>
          ))}
        </Input>
      </FormGroup>
    );
  }
}

export default connect(
  state => ({
    directors: state.directors.directors,
    selectedId: state.movies.selectedDirectorId,
  }),
  {
    fetchDirectors,
    selectDirector,
  },
)(SelectDirector);
