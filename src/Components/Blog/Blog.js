import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Banner from '../utilities/Banner'

import next from '../../Pictures/icons/darkgreen/arrow_right.svg'
import sep from '../../Pictures/others/separation.svg'

export default class Blog extends Component {
	render() {
		// should probably put these in a separate component.. Oh well
		const articles = [
			{
				id: 1,
				title: "Comprendre son cycle qu'il soit régulier ou non !",
				pub_date: '23/04/2019',
				author: 'Ève Dujardin',
				tags: [ 'Intimité', 'Sexualité' ],
				desc:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque enim non risus tempus tincidunt. Duis maximus massa at diam scelerisque eleifend. Aenean in laoreet magna, et pharetra lorem. Aliquam quis purus sed orci efficitur efficitur. Mor',
				img_path: './media/blog/women.jpg'
			},
			{
				id: 1,
				title: "Comprendre son cycle qu'il soit régulier ou non !",
				pub_date: '23/04/2019',
				author: 'Ève Dujardin',
				tags: [ 'Intimité', 'Sexualité' ],
				desc:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque enim non risus tempus tincidunt. Duis maximus massa at diam scelerisque eleifend. Aenean in laoreet magna, et pharetra lorem. Aliquam quis purus sed orci efficitur efficitur. Mor',
				img_path: './media/blog/women.jpg'
			},
			{
				id: 1,
				title: "Comprendre son cycle qu'il soit régulier ou non !",
				pub_date: '23/04/2019',
				author: 'Ève Dujardin',
				tags: [ 'Intimité', 'Sexualité' ],
				desc:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque enim non risus tempus tincidunt. Duis maximus massa at diam scelerisque eleifend. Aenean in laoreet magna, et pharetra lorem. Aliquam quis purus sed orci efficitur efficitur. Mor',
				img_path: './media/blog/women.jpg'
			},
			{
				id: 1,
				title: "Comprendre son cycle qu'il soit régulier ou non !",
				pub_date: '23/04/2019',
				author: 'Ève Dujardin',
				tags: [ 'Intimité', 'Sexualité' ],
				desc:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque enim non risus tempus tincidunt. Duis maximus massa at diam scelerisque eleifend. Aenean in laoreet magna, et pharetra lorem. Aliquam quis purus sed orci efficitur efficitur. Mor',
				img_path: 'media/blog/women.jpg'
			}
		]

		return (
			<div className="blog">
				<h1>Le blog</h1>
				<div className="filterTags">
					<label for="intimity">
						<input type="checkbox" id="intimity" />
						<button type="button">Intimité</button>
					</label>
					<label for="sexuality">
						<input type="checkbox" id="sexuality" />
						<button type="button">Sexualité</button>
					</label>
					<label for="beauty">
						<input type="checkbox" id="beauty" />
						<button type="button">Beauté</button>
					</label>
					<label for="maternity">
						<input type="checkbox" id="maternity" />
						<button type="button">Maternité</button>
					</label>
					<label for="evasion">
						<input type="checkbox" id="evasion" />
						<button type="button">Évasion</button>
					</label>
					<label for="cooking">
						<input type="checkbox" id="cooking" />
						<button type="button">Cuisine</button>
					</label>
					<label for="diy">
						<input type="checkbox" id="diy" />
						<button type="button">DIY</button>
					</label>
				</div>
				<div className="allArticles">
					{articles.map((article) => (
						<Link to={'/blog/' + article.id} className="article">
							<div className="articleTags">{article.tags.map((tag) => <span>{tag}</span>)}</div>
							<img src={article.img_path} alt={article.title} />
							<div>
								<h4>{article.title}</h4>
								<span>
									Le {article.pub_date} &bull; Par {article.author}
								</span>
								<p>{article.desc}</p>
								<a href="#">
									Lire la suite
									<img src={next} alt="Lire la suite de l'article" />
								</a>
							</div>
						</Link>
					))}
				</div>
				<a className="seeMore">
					Voir plus d'articles
					<img src={next} alt="Afficher plus d'articles" />
				</a>
				<img src={sep} alt="" />
				<Banner />
			</div>
		)
	}
}
