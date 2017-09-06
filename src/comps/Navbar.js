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
                            <img src={tlogo} className='tlogo' id='trlogo' alt="trlogo"/>
                            </div>
                        </li>
                        <a href='#about'><li className='navlist'>About</li></a>
                        <li className='navlist'>Services</li>
                        <li className='navlist'>Wedding Films</li>
                        <li className='navlist'>Gallery</li>
                        <li className='navlist'>Events</li>
                        <li className='navlist'>Contact</li>
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
