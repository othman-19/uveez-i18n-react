/* eslint-disable camelcase */
export const addDirectors = directors => ({
  type: 'ADD_DIRECTORS',
  directors,
});

export const fetchDirectors = () => dispatch => (
  fetch('/api/directors.json')
    .then(response => response.json())
    .then(directors => dispatch(addDirectors(directors)))
    .catch(err => console.error(err))
);

export const setNewDirector = ({ name_ar, name_en, name_fr }) => ({
  type: 'SET_NEW_DIRECTOR_NAME',
  name_ar,
  name_en,
  name_fr,
});

export const addDirector = ({ name_ar, name_en, name_fr }) => ({
  type: 'ADD_DIRECTOR',
  name_ar,
  name_en,
  name_fr,
});
