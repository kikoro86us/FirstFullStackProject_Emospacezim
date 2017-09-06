import React, { Component } from 'react';
import Slider from 'react-slick';

import bq from '../img/gallery/bq.jpg'
import getReady from '../img/gallery/getReady.jpg'
import ringon from '../img/gallery/ringon.jpg'
import standing from '../img/gallery/standing.jpg'
import tiara from '../img/gallery/tiara.jpg'
import traditional from '../img/gallery/traditional.jpg'
import standing2 from '../img/gallery/standing2.jpg'
import traditional2 from '../img/gallery/traditional2.jpg'
import withdad from '../img/gallery/withdad.jpg'


class GallerySlide extends Component {
    constructor() {
        super();


        
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
    }

    next() {
        this.slider.slickNext()
    }
    previous() {
        this.slider.slickPrev()
    }

    render() {
        let settings = {
            dots: true,
            // arrows: true,
            // autoplay: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className='slider'>
                <Slider {...settings}>
                    <div className='slide1'><h3><img src={bq} alt='bq'/></h3></div>
                    <div><h3><img src={getReady} /></h3></div>
                    <div><h3><img src={ringon} /></h3></div>
                    <div><h3><img src={standing} /></h3></div>
                    <div><h3><img src={tiara} /></h3></div>
                    <div><h3><img src={traditional} /></h3></div>
                </Slider>
                <div style={{ textAlign: 'center' }}>
                    <button className='button' onClick={this.previous}>Previous</button>
                    <button className='button' onClick={this.next}>Next</button>
                </div>
            </div>
        );
    }
}

export default GallerySlide;