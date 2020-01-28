import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: ${({ imgHeight }) => (typeof imgHeight === 'number' ? `${imgHeight}px` : imgHeight)};
`;

const CarouselSlide = (props) => {
  const { imgUrl, description, attribution, imgHeight, ...otherProps } = props;

  return (
    <figure {...otherProps}>
      <Img src={imgUrl} imgHeight={imgHeight} />
      <figcaption>
        <strong>{description}</strong> {attribution}
      </figcaption>
    </figure>
  );
};

CarouselSlide.propTypes = {
  imgHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  attribution: PropTypes.node,
};

CarouselSlide.defaultProps = {
  imgHeight: 500,
};

export default CarouselSlide;
