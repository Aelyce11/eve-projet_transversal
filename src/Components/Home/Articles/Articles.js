import React, { Component } from 'react';
import articles from '../../../Pictures/home/articles/articles_img.png';
import './Articles.css';
export default class Articles extends Component {
	render() {
		return (
			<div className="container_articles">
				<div className="image_articles">
					<img src={articles} className="calendrier" alt="" />
					<p className="articles_t1">Comprendre son cycle qu'il soit régulier ou non !</p>
					<p className="articles_t2"> Le 23/04/2019 • Par Ève Dujardin </p>
					<p className="articles_t3">
						Lorem ipsum dolor sit amet, consectetur adipiscing . Integer pellentesque enim non <br />risus
						tempus tincidunt. Duis maximus massa at diam scelerisque eleifend. Aenean in <br />laoreet
						magna, et pharetra lorem. Aliquam purus sed orci efficitur efficitur. Mor...
					</p>
					<a className="lire_suite" href="">
						Lire la suite >
					</a>
				</div>

				<div className="image_articles">
					<img src={articles} className="calendrier" />
					<p className="articles_t1">Comprendre son cycle qu'il soit régulier ou non !</p>
					<p className="articles_t2"> Le 23/04/2019 • Par Ève Dujardin </p>
					<p className="articles_t3">
						Lorem ipsum dolor sit amet, consectetur adipiscing . Integer pellentesque enim non <br />risus
						tempus tincidunt. Duis maximus massa at diam scelerisque eleifend. Aenean in <br />laoreet
						magna, et pharetra lorem. Aliquam purus sed orci efficitur efficitur. Mor...
					</p>
					<a className="lire_suite" href="">
						Lire la suite >
					</a>
				</div>
			</div>
		);
	}
}
