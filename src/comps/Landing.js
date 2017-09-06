import React, { Component } from 'react';
import Navbar from './Navbar'
import IntroVideo from './IntroVideo'
import About from './About'
import Services from './Services'
import WeddingFilms from './WeddingFilms'
import Gallery from './Gallery'
import Events from './Events'
import Contact from './Contact'
import Home from './Home'
import LightboxGallery from './Lightbox'


class Landing extends Component {
    render() {
        return (
            <div>
                <Navbar />

                <div id='Home'>
                    <Home />
                </div>

                {/* <div id='introVid'>
                    <IntroVideo />
                </div> */}


                <div id='about'>
                    <About />
                </div>


                <div id='services'>
                    <Services />
                </div>


                <div id='weddingFilms'>
                    {/* <WeddingFilms /> */}
                </div>

                <div id='galleryslide'>
                    {/* <LightboxGallery /> */}
                </div>


                <div id='gallery'>
                    <Gallery />
                </div>


                <div id='event'>
                    <Events />
                </div>


                <div id='contact'>
                    <Contact />
                </div>


            </div>
        );
    }
}

export default Landing;