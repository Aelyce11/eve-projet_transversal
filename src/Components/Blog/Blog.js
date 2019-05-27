import React, { Component } from 'react'

import next from '../../Pictures/icons/darkgreen/arrow_right.svg'

export default class Blog extends Component {
	render() {
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
				<div className="tags">
					<label for="intimity">
						<input type="checkbox" id="intimity" />
						<button>Intimité</button>
					</label>
					<label for="sexuality">
						<input type="checkbox" id="sexuality" />
						<button>Sexualité</button>
					</label>
					<label for="beauty">
						<input type="checkbox" id="beauty" />
						<button>Beauté</button>
					</label>
					<label for="maternity">
						<input type="checkbox" id="maternity" />
						<button>Maternité</button>
					</label>
					<label for="evasion">
						<input type="checkbox" id="evasion" />
						<button>Évasion</button>
					</label>
					<label for="cooking">
						<input type="checkbox" id="cooking" />
						<button>Cuisine</button>
					</label>
					<label for="diy">
						<input type="checkbox" id="diy" />
						<button>DIY</button>
					</label>
				</div>
				{articles.map((article) => (
					<a href={'/blog/' + article.id} className="article">
						{article.tags.map((tag) => <span className="tag">{tag}</span>)}
						<img src={article.img_path} alt={article.title} />
						<h2>{article.title}</h2>
						<span>
							Le {article.pub_date} &bull; Par {article.author}
						</span>
						<p>{article.desc}</p>
						<a>
							Lire la suite
							<img src={next} alt="Lire la suite de l'article" />
						</a>
					</a>
				))}
				<a>
					Voir plus d'articles
					<img src={next} alt="Afficher plus d'articles" />
				</a>
			</div>
		)
	}
}
