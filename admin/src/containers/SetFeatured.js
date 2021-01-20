/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

import { setIsFeatured } from '../actions';

const SetFeatured = props => {
  const { isFeatured, setIsFeatured } = props;
  return (
    <div style={{ marginBottom: '10px' }}>
      <h4>Featured</h4>
      <FormGroup check>
        <Label check>
          <Input
            type="checkbox"
            id="is_featured"
            name="is_featured"
            value={isFeatured}
            onChange={e => setIsFeatured(e.target.checked)}
          />
          Yes
        </Label>
      </FormGroup>
    </div>
  );
};

export default connect(
  state => ({ isFeatured: state.movies.enteredIsFeatured }),
  { setIsFeatured },
)(SetFeatured);
