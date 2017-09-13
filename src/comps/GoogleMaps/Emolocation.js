import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import emolocation from './../css/emolocation.css';

import shouldPureComponentUpdate from 'react-pure-render-utils/function';


export default class Emolocation extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
       <div className='locationstyle'>
          {this.props.text}
          <div id='locaicon'></div>
       </div>
    );
  }
}