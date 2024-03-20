import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrapper = styled.div`
  /* border: 1px solid #ccc; */
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Card = ({ children, className, ...otherProps }) => {
  return (
    <CardWrapper className={className} {...otherProps}>
      {children}
    </CardWrapper>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;

const CardContentWrapper = styled.div`
  padding: 10px;
`;

const CardContent = ({ children, className, ...otherProps }) => {
  return (
    <CardContentWrapper className={className} {...otherProps}>
      {children}
    </CardContentWrapper>
  );
};

CardContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const CardHeaderWrapper = styled.div`
  padding: 5px;
  background-color: #f5f5f5;
`;

const CardHeader = ({ title, subheader, className, ...otherProps }) => {
  return (
    <CardHeaderWrapper className={className} {...otherProps}>
      <code>
        {title}
        {subheader && <p>{subheader}</p>}
      </code>
    </CardHeaderWrapper>
  );
};

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  className: PropTypes.string,
};

const CardMediaWrapper = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

const CardMedia = ({ image, title, className, ...otherProps }) => {
  return (
    <CardMediaWrapper className={className} {...otherProps}>
      <img src={image} alt={title} />
    </CardMediaWrapper>
  );
};

CardMedia.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export { Card, CardActions, CardContent, CardHeader, CardMedia };
