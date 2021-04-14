// React
import React from 'react';
import { NavLink } from 'react-router-dom';
// PropTypes
import PropTypes from 'prop-types';
// Styles
import {
  CardContainer,
  CardImage,
  CardTitle,
  CardInnerContainer,
  CardDescription,
} from './styles';

const Card = ({ image, title, description, url, vertical }) => {
  const ellipsis = (text, end) => {
    return text && text.length > end ? `${text.slice(0, end)}...` : text;
  };

  return (
    <NavLink to={url}>
      <CardContainer data-testid="card-test" vertical={vertical}>
        <CardImage image={image} vertical={vertical} />
        <CardInnerContainer vertical={vertical}>
          <CardTitle vertical={vertical}>{ellipsis(title, 50)}</CardTitle>
          <CardDescription vertical={vertical}>
            {ellipsis(description, 140)}
          </CardDescription>
        </CardInnerContainer>
      </CardContainer>
    </NavLink>
  );
};

Card.defaultProps = {
  vertical: false,
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  vertical: PropTypes.bool,
};

export default Card;
