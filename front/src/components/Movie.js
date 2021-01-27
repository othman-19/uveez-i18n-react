/* eslint-disable react/prop-types */
import React from 'react';

import { t } from '../services/i18n';

const Movie = ({ movie }) => (
  <div className="movie">
    <h3>{movie.title}</h3>

    <p>
      <span style={{ textTransform: 'uppercase' }} className="small">
        Directed by
      </span>
              &nbsp;
      <span className="lead">{movie.director.name}</span>
    </p>

    <p className="small">
      {t('published_on', { date: new Date(movie.published_on) })}
    </p>

    {movie.synopsis.split('\n\n').map((para, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <p key={i}>{para}</p>
    ))}
  </div>
);

export default Movie;
