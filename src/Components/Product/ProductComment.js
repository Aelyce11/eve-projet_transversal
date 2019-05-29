import React, { Component } from 'react'

export default class ProductComment extends Component {
	render() {
		const comment = {
			name: 'Ève Dujardin',
			title: "J'ai trouvé MON produit !",
			note: '/media/notes/heart35.svg',
			date: '22/05/19',
			content:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum metus id ex ornare, a fermentum turpis congue. Sed interdum, leo sed dapibus vulputate, tortor ipsum blandit diam, non bla congue ante quam non ipsum.'
		}
		return (
			<div className="productComment">
				<header>
					<span className="commentAuthor">{comment.name}</span>
					<span className="commentTitle">{comment.title}</span>
					<img src={comment.note} alt="3.5/5" />
				</header>
				<p>{comment.content}</p>
				<span>{comment.date}</span>
			</div>
		)
	}
}
