import React, { Component } from 'react'
import Router from './utils/routes'
import Navbar from './comps/Navbar'
import { Widget } from './comps/Livechat/components/containers'
import Checkout from './comps/Checkout';

// import Landing from './comps/Landing'

export default class App extends Component {
	render() {
		return (
			<div className='App'>
				<Navbar />
				{Router}
				<Widget />
				<Checkout
					name={'A'}
					description={'Option A'}
					amount={1} />
				
			</div>
		)
	}
}