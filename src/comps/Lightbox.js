import React from 'react';
import Lightbox from 'react-images';
import ringon from './../img/gallery/ringon.jpg'
import Arrow from 'react-images';

export default class LightboxGallery extends React.Component {
    constructor(){
        super();
        this.state={
            lightboxIsOpen: true
      }

      this.closeLightbox=this.closeLightbox.bind(this)

    }

closeLightbox(){
    this.setState({lightboxIsOpen: false})
}




  render() {
    return (
      <Lightbox
        images={[
            {src: ringon }, 
            {src: '../img/gallery/standing.jpg' }
            ]}
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox}
      />
    );
  }
}