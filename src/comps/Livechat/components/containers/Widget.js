import React, { Component } from 'react'
import { Comment, ToggleBar } from '../presentation'
import firebase from 'firebase'
import { Base64 } from 'js-base64'


class Widget extends Component {
	constructor(){
		super()
		this.state = {
			showComments: false,
			comments: [],
			firebase: null
		}
	}

	componentDidMount(){
		const fbApp = firebase.initializeApp({
            apiKey: "AIzaSyDuhCzTp4Bn48deJW0Eqi-QZfF2qv1Demo",
            authDomain: "chat-app-e47e3.firebaseapp.com",
            databaseURL: "https://chat-app-e47e3.firebaseio.com",
            projectId: "chat-app-e47e3",
            storageBucket: "chat-app-e47e3.appspot.com",
            messagingSenderId: "486663274731"		
		})

		this.setState({
			firebase: fbApp
		})

		const path = Base64.encode(window.location.href)+'/comments'

		fbApp.database().ref(path).on('value', (snapshot) => {
            console.log(snapshot.val())
			if (snapshot == null)
                return
            
            if (snapshot.val()===null)
                return

			const data = snapshot.val()
			// console.log('COMMENTS UPDATED:'+JSON.stringify(data)) // COMMENTS UPDATED:[{"text":"test","timestamp":1491062399}]
			this.setState({
				comments: data.reverse()
			})
		})
	}

	toggleComments(){
		console.log('toggle comments: '+this.state.showComments)
		this.setState({
			showComments: !this.state.showComments
		})
	}

	submitComment(event){
		if (event.keyCode !== 13) //9월13일 오류나서 고쳤음 != 이거였음
			return

		const comment = {
			text: event.target.value,
			// timestamp: Math.round(Date.now()/1000)
			timestamp: Date.now()
		}

		// const encoded = Base64.encode(window.location.href)
		// console.log('submitComment: '+encoded)
		// console.log('DECODED: '+Base64.decode(encoded))

		let comments = Object.assign([], this.state.comments)
		const path = Base64.encode(window.location.href)+'/comments/'+comments.length

		this.state.firebase.database().ref(path).set(comment)

		console.log('submitComment: '+JSON.stringify(comments))
		event.target.value = '' // clear out the input
	}

	render(){

		if (this.state.showComments === true) //9월13일 오류나서 고쳤음 == 이거였음
			return (
				<div style={style.comments}>
					<div>
						<input onKeyDown={this.submitComment.bind(this)} style={style.input} type="text" placeholder="Enter Comment" />
					</div>

					{ this.state.comments.map((comment, i) => {
							return <Comment key={comment.timestamp} {...comment} />
						})
					}

					<ToggleBar label='Hide Live Chat' onToggle={this.toggleComments.bind(this)} />
				</div>
			)


		return (
			<ToggleBar label='Show Live Chat' onToggle={this.toggleComments.bind(this)} />
		)
	}
}

const style = {
	comments: {
		zIndex: 100,
		height: 650,
		width: 320,
		position: 'fixed',
		bottom: 0,
		right: 0,
		background: '#CCCEBE',
		borderLeft: '1px solid #ddd',
		overflowY: 'scroll',
		paddingBottom: 96
	},
	input: {
		width:100+'%',
		height:36,
		border:'none',
		padding: 9,
		borderBottom: '1px solid #ddd' 
	}
}

export default Widget