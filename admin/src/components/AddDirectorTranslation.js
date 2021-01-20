/* eslint-disable react/prop-types */
import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const AddDirectorTranslation = props => {
  const { dir } = props || 'ltr';
  const {
    name, label, value, onChange,
  } = props;
  return (
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label
        for={name}
        className="mr-sm-2"
      >
        {label}
      </Label>

      <Input
        dir={dir}
        id={name}
        type="text"
        name={name}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </FormGroup>
  );
};

export default AddDirectorTranslation;
