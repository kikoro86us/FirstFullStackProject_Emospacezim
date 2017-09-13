import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class WeddingFilms extends Component {
constructor(){
    super();
    this.state={
        playing: false
  }
}


    render() {
        return (
            <div className='filmscontainer' id='weddingfilms' >
                <p id='weddingfilmstitle'>Wedding Films</p>
                <ReactPlayer url='https://vimeo.com/209323272/6a8918f124'playing={this.state.playing} />
                <ReactPlayer url='https://vimeo.com/209326170/f3f311aef2' playing={this.state.playing} />
                <ReactPlayer url='https://vimeo.com/207560400/9419f147ee' playing={this.state.playing} />
                <ReactPlayer url='https://vimeo.com/207561098/2abcc0031a' playing={this.state.playing}  />
                <ReactPlayer url='https://vimeo.com/207561970/34b42eb162' playing={this.state.playing} />
                <ReactPlayer url='https://vimeo.com/207428248/883bef2245' playing={this.state.playing} />
                <ReactPlayer url='https://vimeo.com/207049789/3c6862b2a4' playing={this.state.playing} />
                <ReactPlayer url='https://vimeo.com/207050430/50dee82f9a' playing={this.state.playing} />
                <ReactPlayer url='https://vimeo.com/207561970/34b42eb162' playing={this.state.playing} />
            </div>
        );
    }
}

export default WeddingFilms;