import React from 'react';
import PropTypes from 'prop-types';

const CarouselButton = (props) => <button {...props} />;

CarouselButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default CarouselButton;
