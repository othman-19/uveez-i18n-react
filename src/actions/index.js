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
