import React from 'react';
import PropTypes from 'prop-types';
import CarouselButton from './CarouselButton';
import CarouselSlide, { CarouselSlideImage } from './CarouselSlide';

class Carousel extends React.PureComponent {
  static propTypes = {
    defaultImg: CarouselSlide.propTypes.Img,
    defaultImgHeight: CarouselSlide.propTypes.imgHeight,
    slides: PropTypes.arrayOf(PropTypes.shape(CarouselSlide.propTypes)).isRequired,
  };

  static defaultProps = {
    defaultImgHeight: CarouselSlide.defaultProps.imgHeight,
    default: CarouselSlideImage,
  };

  state = {
    slideIndex: 0,
  };

  handlePrevClick = () => {
    const { slides } = this.props;
    this.setState(({ slideIndex }) => ({ slideIndex: (slideIndex + slides.length - 1) % slides.length }));
  };

  handleNextClick = () => {
    const { slides } = this.props;
    this.setState(({ slideIndex }) => ({ slideIndex: (slideIndex + 1) % slides.length }));
  };

  render() {
    const { slides, defaultImg, defaultImgHeight, ...otherProps } = this.props;

    return (
      <div {...otherProps}>
        <CarouselSlide Img={defaultImg} imgHeight={defaultImgHeight} {...slides[this.state.slideIndex]} />

        <CarouselButton data-action="prev" onClick={this.handlePrevClick}>
          Prev
        </CarouselButton>

        <CarouselButton data-action="next" onClick={this.handleNextClick}>
          Next
        </CarouselButton>
      </div>
    );
  }
}

export default Carousel;
