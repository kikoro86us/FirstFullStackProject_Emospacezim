import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import tlogo from '../img/white-logo.png'
import axios from 'axios'
// import $ from 'jquery'
import jump from 'jump.js'


class Navbar extends Component {
    constructor() {
        super()

        this.state = {
            user: null,

        }
        this.jumpabout=this.jumpabout.bind(this)
        this.jumpservices=this.jumpservices.bind(this)
        this.jumpgal=this.jumpgal.bind(this)
        this.jumpcont=this.jumpcont.bind(this)
        this.jumpwf=this.jumpwf.bind(this)
        this.jumpmain=this.jumpmain.bind(this)
    }


jumpabout(){
    // alert('work')
    jump('.aboutContainer',{
        duration: 1000,
        // easing: easeInOutQuad
    }) 
}

jumpservices(){
    jump('.serviceTitle',{
        duration: 1000,
        // easing: easeInOutQuad
    }) 
}

jumpgal(){
    jump('.gallery',{
        duration: 1000,
        // easing: easeInOutQuad
    }) 
}

jumpcont(){
    jump('.contactdiv',{
        duration: 1000,
        // easing: easeInOutQuad
    }) 
}


jumpwf(){
    jump('.filmscontainer',{
        duration: 1000,
        // easing: easeInOutQuad
    }) 
}

jumpmain(){
    jump('.home',{
        duration: 1000,
        // easing: easeInOutQuad
    }) 
}



    componentDidMount() {
        console.log('before axios call')
        axios.get('/auth/me').then(res => {
            // console.log('res', res.data.emails[0].value)
            
              this.setState({user: res.data.emails[0].value})
            
            // console.log(this.state)
        });

    }

    render() {

        return (
            <div className='navContainer'>
                <ul className='menulist'>
                    <li>
                        <div>
                            <a href='/#mainpage' onClick={this.jumpmain}><img src={tlogo} className='tlogo' id='trlogo' alt="trlogo" /></a>
                        </div>
                    </li>
                    <li className='navlist' id='liabout'><a href='/#about'onClick={this.jumpabout}>About</a></li>
                    
                    <li className='navlist'><a href='/#services' onClick={this.jumpservices}>Services</a></li>
                    
                    <li className='navlist'><a href='/#weddingfilms' onClick={this.jumpwf}>Wedding Films</a></li>
                    
                    <li className='navlist'><a href='/#gallerypic' onClick={this.jumpgal}>Gallery</a></li>

                    {/* <li className='navlist'><a href='/#events'>Events</a></li> */}

                    <li className='navlist'><a href='/#contact'onClick={this.jumpcont}>Contact</a></li>


                    {this.state.user === 'aceguy86@gmail.com'
                        && <li><Link to="/admin">Admin</Link></li>}





                    <li>
                        <div>
                            {!this.state.user &&
                                <a href='/auth'>
                                    <button className='login'>Log in / Sign in</button>
                                </a>
                            }


                            {this.state.user &&
                                <div className='maillogout'>
                                    <div id='loginmail'>{this.state.user}</div>
                                    <a href='/auth/logout'>
                                        <button className='logout'>Log out</button>
                                    </a>
                                </div>
                            }

                        </div>
                    </li>
                </ul>
            </div>

        );
    }
}

export default Navbar;
