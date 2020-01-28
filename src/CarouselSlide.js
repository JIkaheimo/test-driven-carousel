import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DefaultImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : height)};
`;

const CarouselSlide = (props) => {
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
  Img: DefaultImg,
  imgHeight: 500,
};

export default CarouselSlide;
