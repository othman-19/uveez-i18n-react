import _ from 'lodash';

const INITIAL_STATE = {
  directors: [],
};

export default (state = INITIAL_STATE, action) => {
  let directors = [];
  switch (action.type) {
    case 'ADD_DIRECTORS':
      directors = _.unionBy(action.directors, state.directors, 'id');
      return {
        ...state,
        directors,
      };
    default:
      return state;
  }
};
