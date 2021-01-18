/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Card,
  Form,
  Button,
  CardBody,
  CardTitle,
} from 'reactstrap';
import { setNewDirector } from '../actions';
import AddDirectorTranslation from '../components/AddDirectorTranslation';

class AddDirector extends Component {
  _updateTranslation(key, value) {
    const { setNewDirector } = this.props;
    setNewDirector({ [key]: value });
  }

  render() {
    const {
      style,
      name_ar,
      name_en,
      name_fr,
    } = this.props;

    return (
      <Card style={style}>
        <CardBody>
          <CardTitle>Add Director with Name</CardTitle>
          <Form inline>
            <AddDirectorTranslation
              dir="rtl"
              name="name_ar"
              label="Arabic"
              value={name_ar}
              onChange={value => this._updateTranslation('name_ar', value)}
            />
            <AddDirectorTranslation
              name="name_en"
              label="English"
              value={name_en}
              onChange={value => this._updateTranslation('name_en', value)}
            />
            <AddDirectorTranslation
              name="name_fr"
              label="French"
              value={name_fr}
              onChange={value => this._updateTranslation('name_fr', value)}
            />
            <Button>Add</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}
export default connect(
  state => {
    const { name_ar, name_en, name_fr } = state.directors.newDirector;

    return { name_ar, name_en, name_fr };
  },
  {
    setNewDirector,
  },
)(AddDirector);
