import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'
import shouldPureComponentUpdate from 'react-pure-render-utils/function'
import Emolocation from './Emolocation'
// import googlemap from './../css/googlemap.css'


// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Testmap extends Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         center: [37.564662, 127.020459],
    //         zoom: 17,
    //     }
    // }

    static propTypes = {
    apiKey: PropTypes.any,
    center: PropTypes.array,
    zoom: PropTypes.number,
    emolocation: PropTypes.any
    };




    static defaultProps = {
        apiKey: 'AIzaSyDnQyxtKQmAgyMNJIHDoL1ok7cd-AsmT0w',
        center: [37.564680, 127.020426],
        zoom: 17,
        emolocation: {lat:37.564680, lng:127.020426} 
      };

      shouldComponentUpdate = shouldPureComponentUpdate;

    //   constructor(props){
    //       super(props);
    //   }


    render() {
        return (
            <div>
                <div className='map'>
                    <GoogleMapReact
                        apiKey={this.props.apiKey}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}>
              
                        <Emolocation lat={37.564680} lng={127.020426} text={'Emospacezim'} /* Kreyser Avrora */ />
                    </GoogleMapReact>
                </div>

            </div>
        );
    }
}

export default Testmap;