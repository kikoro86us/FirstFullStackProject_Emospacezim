import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import tlogo from '../img/white-logo.png'


class Navbar extends Component {
    render() {

        return (
            <div className='navContainer'>
                    <ul className='menulist'>
                        <li>
                            <div>
                            <a href='#mainpage'><img src={tlogo} className='tlogo' id='trlogo' alt="trlogo"/></a>
                            </div>
                        </li>
                        <a href='#about'><li className='navlist'>About</li></a>
                        <a href='#services'><li className='navlist'>Services</li></a>
                        <a href='#weddingfilms'><li className='navlist'>Wedding Films</li></a>
                        <a href='#gallerypic'><li className='navlist'>Gallery</li></a>
                        <a href='#events'><li className='navlist'>Events</li></a>
                        <a href='#contact'><li className='navlist'>Contact</li></a>
                        <li>
                            <div>
                                <a href='http://localhost:3050/auth'>
                                    <button className='login'>Log in</button>
                                </a>
                                <a href='http://localhost:3050/auth/logout'>
                                <button className='logout'>Log out</button>
                                </a>
                            </div>
                        </li>       
                    </ul>
                </div>

                );
    }
}

export default Navbar;
