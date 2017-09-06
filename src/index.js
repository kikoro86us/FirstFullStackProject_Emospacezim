import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { HashRouter as Router } from 'react-router-dom'
import './styles/main.css'
import $ from 'jquery'



    $(window).scroll(function(){
	var wScroll = $(this).scrollTop();


    $('.logo').css({
        'transform' : 'translate(0px, '+ wScroll /2 + '%)'
	})
	
	$('.bgbird').css({
        'transform' : 'translate(0px, '+ wScroll /4 + '%)'
	})
	
	$('.couple').css({
        'transform' : 'translate(0px, -'+ wScroll /40 + '%)'
	})


	// var hahaha = $('.service').offset().top
	// console.log(hahaha)
	// if (wScroll >= hahaha) alert(hahaha)

	//확인하는 용도를 위해 이방법을 쓰도록 한다.
//알란


	var hahaha = $('.service').offset().top
	var a = $('.a')
	var b = $('.b') //for b
	var c = $('.c')
	var d = $('.d')
	var e = $('.e')
	var f = $('.f')

	// console.log(hahaha)//2217
	if (wScroll >= (hahaha - 500))  {
		a.addClass('scrolled')
		b.addClass('scrolled')
		c.addClass('scrolled')
		d.addClass('scrolled')
		e.addClass('scrolled')
		f.addClass('scrolled')
	}
	else {
		a.removeClass('scrolled')
		b.removeClass('scrolled')
		c.removeClass('scrolled')
		d.removeClass('scrolled')
		e.removeClass('scrolled')
		f.removeClass('scrolled')

	}







	
	if(wScroll > $('.weddingPics').offset().top - ($(window).height()/1.2)) {

		$('.weddingPics figure').each(function(i){

			setTimeout(function() {
			$('.weddingPics figure').eq(i).addClass('is-showing');}, 150 * (i+1) );


			// $('.weddingPics figure').addClass('is-showing');

		});

	}else{
		$('.weddingPics figure').removeClass('is-showing')
	}




})












ReactDOM.render(
	<Router>
		<App />
	</Router>,
document.getElementById('root'))