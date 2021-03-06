import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const CarouselSlideImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : height)};
`;

export const CarouselSlide = (props) => {
  const { Img, imgUrl, description, attribution, imgHeight, ...otherProps } = props;

  return (
    <figure {...otherProps}>
      <Img src={imgUrl} height={imgHeight} />
      <figcaption>
        <strong>{description}</strong> {attribution}
      </figcaption>
    </figure>
  );
};

CarouselSlide.propTypes = {
  Img: PropTypes.elementType,
  imgHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  attribution: PropTypes.node,
};

CarouselSlide.defaultProps = {
  Img: CarouselSlideImage,
  imgHeight: 500,
};

export default CarouselSlide;
