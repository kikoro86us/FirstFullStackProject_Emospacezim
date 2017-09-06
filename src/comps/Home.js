import React, { Component } from 'react';

class Home extends Component {



// componentDidMount() {
//     // Jquery here $(...)...
//     $(window).scroll(function(){
//     var wScroll = $(this).scrollTop();

//     $('.logo').css({
//         'transform' : 'translate(0px, '+ wScroll /2 + '%)'
//     })
// })
//   }
// jQuery code
//     $(window).scroll(function(){
//     var wScroll = $(this).scrollTop();

//     $('.logo').css({
//         'transform' : 'translate(0px, '+ wScroll /2 + '%)'
//     })
// })








// constructor(){
//     super();
//     this.state={
//         "window": "scroll"
//   }

//   this.handleScroll=this.handleScroll.bind(this);

// }




handleScroll = () =>{
    this.setState({

    })
    console.log('scroll')
};




    render() {
        return (
            <div className='home'>

                <div className='header'>
                    <div className='bgbird'></div> 
                    <div className='logo'></div>
                    <div className='couple'></div>
                </div>



                <div className='homecontent'>
                    <h1 className='homeh1'>EMOSPACEZIM</h1>
                    <hr/>  
                    <p className='homepbody'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, assumenda laborum? Distinctio, expedita veritatis dignissimos impedit alias incidunt temporibus culpa, autem, animi adipisci necessitatibus ita veritatis dignissimos impedit alias incidunt temporibus culpaullam consectetur non voluptatibus harum dicta.</p>
                </div>
            </div>
        );
    }
}

export default Home;