/* eslint-disable react/prop-types */
import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
} from 'reactstrap';

import { t } from '../services/i18n';
import LocalizedLink from '../containers/LocalizedLink';

function synopsis(str, length = 250) {
  const suffix = str.length > length ? '…' : '';

  return (str.substring(0, length) + suffix).split('\n\n');
}

const FeatredMovie = ({ movie }) => (
  <Card style={{ marginBottom: '20px' }}>
    <LocalizedLink to={`/movies/${movie.id}`}>
      <CardImg top src={movie.thumbnail_url} alt={movie.title} />
    </LocalizedLink>

    <CardBody>
      <CardTitle>
        <LocalizedLink to={`/movies/${movie.id}`}>
          {movie.title}
        </LocalizedLink>
      </CardTitle>

      <CardText className="small text-muted">
        {t('directed_by', { director: movie.director.name })}
        {' | '}
        {t('published_on_date_only', { date: new Date(movie.published_on) })}
      </CardText>

      <CardText tag="div">
        {synopsis(movie.synopsis).map((para, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={i}>{para}</p>
        ))}
      </CardText>
    </CardBody>
  </Card>
);

export default FeatredMovie;
