import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from '../src/Carousel';
import slides from './slides';

const container = document.createElement('div');
document.body.append(container);
ReactDOM.render(<Carousel slides={slides} />, container);
