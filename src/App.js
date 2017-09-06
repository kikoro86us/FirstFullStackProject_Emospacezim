import React, { Component } from 'react'
// import Router from './utils/routes'
import Landing from './comps/Landing'

export default class App extends Component {
	render() {
		return (
			<div className='App'>
				{/* {Router} */}
				<Landing />
			</div>
		)
	}
}