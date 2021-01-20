/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

import { setPublishedOn } from '../actions';

const SetPublishedOn = props => {
  const { publishedOn, setPublishedOn } = props;
  return (
    <FormGroup>
      <Label for="published_on" className="h4">Published on</Label>

      <Input
        type="month"
        id="published_on"
        name="published_on"
        value={publishedOn}
        onChange={e => setPublishedOn(e.target.value)}
      />
    </FormGroup>
  );
};

export default connect(
  state => ({ publishedOn: state.movies.enteredPublishedOn }),
  { setPublishedOn },
)(SetPublishedOn);
