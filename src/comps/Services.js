import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
import Checkout from './Checkout';

class Services extends Component {


handleClick(){
 
}


    render() {



        return (
            <div className='service' id='services'>
                <p className='serviceTitle'>Services</p>
                
                <div className='part1'>
                    <div className='a'><Checkout id='optionA'
					name={'Option A'}
					description={'저렴하지만 알찬 실속형 구성'}
					amount={50000} /></div>

                    <div className='b'><Checkout
					name={'Option B'}
					description={'가장 많이 선택하시는 베이직 구성'}
					amount={60000} /></div>

                    <div className='c'><Checkout
					name={'Option C'}
					description={'가성비 최고의 프리이엄 구성'}
					amount={65000} /></div>
                </div>

                <div className='part2'>
                    <div className='d'><Checkout 
					name={'Option D'}
					description={'메이크업이 포함된 실속형 구성'}
					amount={70000} /></div>
                    <div className='e'><Checkout
					name={'Option E'}
					description={'메이크업이 포함된 베이직 구성'}
					amount={75000} /></div>
                    <div className='f'><Checkout
					name={'Option F'}
					description={'메이크업이 포함된 프리미엄 구성'}
					amount={80000} /></div>
                </div>
            </div>
        );
    }
}

export default Services;