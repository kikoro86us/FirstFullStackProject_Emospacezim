import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './styles/main.css'
// import $ from 'jquery'

// function hashLinkScroll() {
// 	const { hash } = window.location;
// 	console.log(hash);
// 	if (hash !== '') {
// 	  // Push onto callback queue so it runs after the DOM is updated,
// 	  // this is required when navigating from a different page so that
// 	  // the element is rendered on the page before trying to getElementById.
// 	  setTimeout(() => {
// 		const id = hash.replace('#', '');
// 		const element = document.getElementById(id);
// 		if (element) element.scrollIntoView();
// 	  }, 1000);
// 	}
//   }

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
document.getElementById('root'))