import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import bg from '../img/gallery/bq.jpg'
 
const images = [
    'https://image.ibb.co/iyWMDa/bq.jpg',
    'https://image.ibb.co/eregDa/getReady.jpg',
    'https://image.ibb.co/f6GBDa/standing2.jpg',
    'https://image.ibb.co/eY5Smv/traditional2.jpg',
    'https://image.ibb.co/dEgYRv/standing.jpg',
    'https://image.ibb.co/n4YPYa/traditional.jpg',
    'https://image.ibb.co/n7sJta/tiara.jpg',
    'https://image.ibb.co/e2JDRv/ringon.jpg'
    // '//placekitten.com/1500/1500'
];
 
export default class LightboxExample extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }
 
    render() {
        const {
            photoIndex,
            isOpen,
        } = this.state;
 
        return (
            <div className='lightbox' id='lbphotos'>
                <button id='lbbutton'
                    type="button" 
                    onClick={() => this.setState({ isOpen: true })}
                >
                    OPEN THE GALLERY
                </button>
 
                {isOpen &&
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
 
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })}
                    />
                }
            </div>
        );
    }
}