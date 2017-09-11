import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import tlogo from '../img/white-logo.png'
import axios from 'axios'


class Navbar extends Component {
    constructor() {
        super()

        this.state = {
            user: null,

        }
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
                            <a href='/#mainpage'><img src={tlogo} className='tlogo' id='trlogo' alt="trlogo" /></a>
                        </div>
                    </li>
                    <li className='navlist'><a href='/#about'>About</a></li>
                    <li className='navlist'><a href='/#services'>Services</a></li>
                    <li className='navlist'><a href='/#weddingfilms'>Wedding Films</a></li>
                    
                    <li className='navlist' id='galleryp'>Gallery</li>

                    {/* <li className='navlist'><a href='/#events'>Events</a></li> */}

                    <Link to='/contact'><li className='navlist'>Contact</li>
                    </Link>

                    {this.state.user === 'kikoro86us@gmail.com'
                        && <li><Link to="/admin">Admin</Link></li>}





                    <li>
                        <div>
                            {!this.state.user &&
                                <a href='http://localhost:3050/auth'>
                                    <button className='login'>Log in / Sign in</button>
                                </a>
                            }


                            {this.state.user &&
                                <div className='maillogout'>
                                    <div id='loginmail'>{this.state.user}</div>
                                    <a href='http://localhost:3050/auth/logout'>
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
