import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import GuideRedirect from './GuideRedirect'
import ProductCard from '../Product/ProductCard'

import next from '../../Pictures/icons/darkgreen/arrow_right.svg'

export default class Article extends Component {
	render() {
		const article = {
			topimg: '/media/blog/1/talk.png',
			pub_date: '29/05/2019',
			author: 'Théo Sibial',
			title: 'Premières règles : comment en parler à sa fille ?',
			intro:
				'Ce n’est pas facile de sentir son corps changer, et avec ça on saigne ? Que demander de plus. Votre fille se sent gênée d’en parler ? même à vous ? faites le premier pas et aidez-la à mieux s’aventurer dans le monde de la puberté.',
			content: [
				{
					subtitle: 'Trouvez le bon moment',
					text:
						'Si elle commence à démontrer de la curiosité, il s’agit d’un bon moment pour entamer la conversation avec votre fille à propos de la puberté et de ses premières règles. Il est possible, si elle est âgée de 8 ans ou plus, qu’elle fasse déjà l’expérience de changements physiques et qu’elle soit très curieuse. La période de puberté peut être difficile en tant que parent. Vous pouvez avoir l’impression d’avoir perdu votre petite fille. La fillette qui vous suppliait de lui lire une histoire à l’heure du coucher et de la border veut maintenant des revues pour ados et des moments de solitude. Les sorties que vous aimiez faire ensemble deviennent soudainement des corvées à ses yeux et l’accès à sa chambre nécessite une invitation.',
					img: '/media/blog/1/hug.png'
				},
				{
					subtitle: 'Comment lui en parler ?',
					text:
						'Toutes les femmes passent par cette étape, et c’est toujours compliqué d’aborder le sujet. Mais pourquoi est-ce compliqué ? C’est naturel. Il ne faut pas que ce soit un sujet tabou. Surtout auprès de votre fille. Si vous hésitez à lui en parler, alors pendant toute sa vie elle pensera que ça sera un sujet tabou et en aura du mal à en parler à sa fille. Mais il ne faut pas, c’est normal chez une femme. Parlez en lui d’une façon à vous. Racontez-lui votre expérience, comment vous l’avez vécu, comment vous avez réagis. Elle fera de même en prenant exemple sur vous. Racontez ce en quoi consistent les transformations que son corps subira, et qu’à ces transformations correspondent les enchantements du corps féminin dont elle bénéficiera. Comme s’il s’agissait là d’une première porte par laquelle la fillette passerait pour accéder au merveilleux monde féminin, avec lequel elle rêve finalement depuis petite. Quelle fillette n’a pas joué à se draper des robes ou à porter les chaussures à talon de maman, à se mettre du rouge à lèvres ? La voilà arrivée à cette nouvelle étape de sa vie, où elle pourra commencer à réaliser ces rêves...',
					img: '/media/blog/1/cite.png'
				},
				{
					subtitle: 'Lorsque les règles arrivent finalement, quel discours tenir à sa fille ?',
					text:
						'Réaffirmer sa joie de voir la fille accéder à une position plus féminine - moins enfantine. Malgré toutes les difficultés qui peuvent se présenter, nul mieux que la mère – de sexe féminin comme le sien – pour indiquer à sa fille que cet épisode peut être plein d’attraits, et que la vie de femme est pleine de joies. Il est tout aussi important que la mère lui dise : "voici comment j’ai résolu ma féminité, maintenant à toi de jouer, et d’emprunter ta propre direction pour vivre la tienne. Je serai là pour t’accompagner pour aussi longtemps que tu voudras, mais ta voie n’est pas forcément comme la mienne." S’ouvre alors la possibilité de voir se développer des relations différentes avec la fille, non plus une de dépendance au regard et à l’approbation de la mère, mais une entente entre les deux femmes.',
					img: '/media/blog/1/regles.png'
				}
			]
		}

		const product = {
			img: '/media/products/box/premierefois-product.png',
			name: 'Ma toute première fois',
			type: 'box ève',
			desc: 'Tes toutes premières règles ? Pas de panique, Ève a pensé à tout avec cette box.',
			duration: '1 mois',
			price: '14.99'
		}

		return (
			<div className="blogArticle">
				<Link to="/blog">
					<img src={next} alt="Retourner sur le blog" />
					Retour aux articles
				</Link>
				<GuideRedirect />

				<div className="fullArticle">
					<img src={article.topimg} alt={article.title} />
					<h1>{article.title}</h1>
					<span>
						Le {article.pub_date} &bull; Par {article.author}
					</span>
					<p className="intro">{article.intro}</p>

					<hr />

					{article.content.map((para) => (
						<div className="articleContent">
							<div>
								<h4>{para.subtitle}</h4>
								<p>{para.text}</p>
							</div>
							<img src={para.img} alt={para.subtitle} />
						</div>
					))}
				</div>

				<h4>Produits suggéré pour vous par Ève :</h4>

				<Link to="/research/1" className="product">
					{/* <img src={product.img} alt={product.name} />
					<div>
						<span className="productName">{product.name}</span>
						<span className="productType">{product.type}</span>
						<p>{product.desc}</p>
						<div>
							<span>durée : env. {product.duration}</span>
							<span className="price">{product.price}&euro;</span>
						</div>
          </div> */}
					<ProductCard />
				</Link>
			</div>
		)
	}
}
