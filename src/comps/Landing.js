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
import GallFrame from './GallFrame'
import ForAdmin from './ForAdmin'
import $ from 'jquery'
import jump from 'jump.js'



class Landing extends Component {


    componentDidMount(){

    setTimeout(function() {
    console.log("Subscribbing scroll");
    $(window).scroll(function(){
            var wScroll = $(this).scrollTop();
        
            // document.getElementById()
        
        
            $('.logo').css({
                'transform' : 'translate(0px, '+ wScroll /2 + '%)'
            })
            
            $('.bgbird').css({
                'transform' : 'translate(0px, '+ wScroll /4 + '%)'
            })
            
            $('.couple').css({
                'transform' : 'translate(0px, -'+ wScroll /75 + '%)'
            })
        
            })
        }, 1000);

    }
        // ddd
            // var hahaha = $('.service').offset().top
            // console.log(hahaha)
            // if (wScroll >= hahaha) alert(hahaha)
        
            //확인하는 용도를 위해 이방법을 쓰도록 한다.
        //알란
        
        
            // var hahaha = $('.service').offset().top
            // var a = $('.a')
            // var b = $('.b') //for b
            // var c = $('.c')
            // var d = $('.d')
            // var e = $('.e')
            // var f = $('.f')
        
            // console.log(hahaha)//2217

            // if (wScroll >= (hahaha - 500))  {
            //     a.addClass('scrolled')
            //     b.addClass('scrolled')
            //     c.addClass('scrolled')
            //     d.addClass('scrolled')
            //     e.addClass('scrolled')
            //     f.addClass('scrolled')
            // }
            // else {
            //     a.removeClass('scrolled')
            //     b.removeClass('scrolled')
            //     c.removeClass('scrolled')
            //     d.removeClass('scrolled')
            //     e.removeClass('scrolled')
            //     f.removeClass('scrolled')
        
            // }
        
        
        
        
        
        
        
            
        //     if(wScroll > $('.weddingPics').offset().top - ($(window).height()/1.2)) {
        
        //         $('.weddingPics figure').each(function(i){
        
        //             setTimeout(function() {
        //             $('.weddingPics figure').eq(i).addClass('is-showing');}, 150 * (i+1) );
        
        // ----------------
        //             // $('.weddingPics figure').addClass('is-showing');
        
        //         });
        
        //     }else{
        //         $('.weddingPics figure').removeClass('is-showing')
        //     }
        
        

    // componentWillUnmount(){
    //     console.log("Unsubscribe Scroll");
    //     $(window).unbind('scroll')
    // }

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


                <div>
                    <Services />
                </div>


                <div id='weddingFilms'>
                    <WeddingFilms />
                </div>

                {/* <div>
                    <LightboxGallery />
                </div> */}


                <div>
                    <Gallery />
                </div>

                <div>
                    <GallFrame />
                </div>


                <div>
                    <Contact />
                </div>

                {/* <div>
                    <ForAdmin />
                </div> */}


            </div>
        );
    }
}

export default Landing;