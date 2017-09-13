import React, { Component } from 'react';
import bg from '../img/gallery/bq.jpg'
import getReady from '../img/gallery/getReady.jpg'
import ringon from '../img/gallery/ringon.jpg'
import standing from '../img/gallery/standing.jpg'
import tiara from '../img/gallery/tiara.jpg' 
import traditional from '../img/gallery/traditional.jpg'
import standing2 from '../img/gallery/standing2.jpg'
import traditional2 from '../img/gallery/traditional2.jpg'
import withdad from '../img/gallery/withdad.jpg'
import gvid from '../vids/galbg.webm'
import OpeningBook from './OpeningBook'

class Gallery extends Component {
    render() {
        return (
            <div className='gallery' ref='gal' id='gallerypic'>
                <video id='galvid' autoPlay muted loop className="css-background-video" data-state="play">
                     <source src={gvid} type="video/webm"/>
                 </video>

                
                <div className='weddingPics'>
                    <p id='galTitle'>Gallery</p>
                    <OpeningBook />
                    
                 </div>
            </div>
        );
    }
}

export default Gallery;