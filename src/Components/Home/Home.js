import React, { Component } from 'react';
import './Home.css';
import WhySubcribe from '../WhySubscribe';
import mabox from '../../Pictures/home/mabox.png';
import produit from '../../Pictures/home/produit_preferes.png';
import Product from './Product.js';
import Articles from './Articles/Articles.js';
import box from '../../Pictures/home/icon/Box.png';
import cadeau from '../../Pictures/home/icon/Cadeau.png';
import livraison from '../../Pictures/home/icon/livraison.png';
import indeed from '../../Pictures/home/marque/indeed.png';
import lunacopine from '../../Pictures/home/marque/logo_lunacopine.png';
import avril from '../../Pictures/home/marque/logo-avril-beaute.png';
import mooncap from '../../Pictures/home/marque/mooncap.png';
import natracare from '../../Pictures/home/marque/natracare.png';
import naty from '../../Pictures/home/marque/NATY_LOGOTYPE.png';
import feuille from '../../Pictures/home/communauteve/feuille.png';
import girls from '../../Pictures/home/communauteve/girls.png';
import eve from '../../Pictures/home/eve.png';
import allbox from '../../Pictures/home/all_box.png';
import boxpref from '../../Pictures/home/boxpref.png';
import oeil from '../../Pictures/home/valeurs/oeil.png';
import feuillevaleur from '../../Pictures/home/valeurs/feuille_valeur.png';
import feuilletransp from '../../Pictures/home/valeurs/feuilles_transp.png';
import girls_valeurs from '../../Pictures/home/valeurs/girls_valeurs.png';

export default class Home extends Component {
	render() {
		return (
			<div>
				<div className="container1">
					<img src={mabox} className="image1" alt="" />
					<p className="t1"> Mon intimité</p>
					<p className="t2">ma box !</p>
					<p className="t3">
						Qui mieux que vous connaît votre intimité ? Qui mieux que <br /> vous connaît les besoins de
						votre corps ? Qui peut déterminer <br /> ce qu’il vous faut pour le cycle que vous seule vivez
						dans votre chair ? <br />Créer votre propre box pour votre intimité.<br /> Séléctionnez vos
						produits préférés et la fréquence à laquelle <br /> vous en avez besoin et on vous livre votre
						propre box.
					</p>
					<a className="savoirplus" href="">
						En Savoir plus
					</a>
				</div>
				<WhySubcribe />
				<div className="container_avantage">
					<p className="avantages">Plein d’avantages pour</p>
					<div className="childrenone">
						<p className="euro">3,99€</p>
						<div className="childrentwo">
							<p className="seulement">seulement</p>
							<p className="engagement">et sans engagement*</p>
						</div>
					</div>
				</div>
				<div className="logos">
					<div>
						<img src={box} alt="logo de box" />
						<p>
							Des cadeaux exclusifs à chaque <br /> réception de ta commande
						</p>
					</div>
					<div>
						<img src={cadeau} alt="logo de cadeau" />
						<p> Fait ta propre box sur mesure !</p>
					</div>
					<div className="childlivraison">
						<img src={livraison} alt="logo de livraison" />
						<p>
							Accède à la livraison <br /> programmable et personnalisée
						</p>
					</div>
				</div>
				<div className="green_container">
					<p>Les produits préférés</p>
				</div>
				<div className="allbox">
					<img src={boxpref} className="image_allbox" alt="" />
				</div>
				<div>
					<Product />
				</div>
				<br />
				<div className="containermai">
					<img src={produit} className="produit" alt="" />
					<p className="t4">Le cadeau mens(tr)uel</p>
					<p className="t5">en Mai</p>
					<p className="t6">range ce qui te plaît !</p>
					<p className="t7">
						En mai, range ce qu'il te plaît ! <br />Dans la superbe pochette de Lumanuby qui annonce déjà
						l'été qui arrive ! <br />Des flamants roses et des palmes qui garderont tout ce que tu veux
						<br /> dans cette jolie pochette zippée.
					</p>
					<a className="button_abonnement" href="">
						Je m'abonne !
					</a>
				</div>

				<div className="green_container">
					<p>Les boxs par Ève</p>
				</div>
				<div className="creebox">
					<img src={allbox} alt="" className="image_creebox" />
				</div>
				<div className="banniere_marque">
					<ul>
						<li>
							<img src={naty} alt="logo naty" />
						</li>
						<li>
							<img src={lunacopine} alt="logo de lunacopine" />
						</li>
						<li>
							<img src={mooncap} alt="logo de mooncap" />
						</li>
						<li>
							<img src={avril} alt=" logo de avril" />
						</li>
						<li>
							<img src={natracare} alt="logo de natracare" />
						</li>
						<li>
							<img src={indeed} alt="logo de indeed" />
						</li>
					</ul>
				</div>

				<div className="green_container container_valeur">
					<p>Les valeurs d’Ève</p>
					<img src={eve} className="eve_image" alt="image d'ève" />
				</div>

				<div className="valeur_eve">
					<div classname="valeur_eve_container1">
						<img src={oeil} className="oeil" alt="" />
						<p className="valeur_t1">TRANSPARENCE</p>
						<p className="valeur_t2">
							Alors oui on sait, les règles c’est pas agréable, mais<br /> au moins on vous empêche
							d’aggraver votre santé, <br />car chez Ève vous êtes notre priorité !<br /> Nous nous
							engageons à mettre à votre disposition<br /> seulement et uniquement des marques<br />transparentes
							sur la composition de leurs produits.
						</p>
						<p className="valeur_t3">
							“20 à 30 composants<br /> chimiques détectés dans <br />les tampons des 6 marques<br />
							les plus utilisées”
						</p>
					</div>
					<div className="div_white">
						<img src={feuilletransp} className="feuille_transp" alt="feuille trasparante" />
						<img src={feuillevaleur} className="feuille_valeur" alt="feuille d'ève" />
						<p className="valeur_t4">Environnement</p>
						<p className="valeur_t5">
							Chez Ève, nous nous engageons à vous proposer <br />uniquement des produits écologiques ou<br />
							réutilisables pour le bonheur de la planète !<br /> Pour améliorer notre impact écologique,
							vous<br />
							recevez vos produits dans une boite toute<br /> mignonne et recyclable.
						</p>
						<p className="valeur_t6">“Une serviette classique met </p>
						<p className="valeur_t7">entre 400 et 500 ans </p>
						<p className="valeur_t8"> à disparaître” </p>
					</div>

					<div className="valeur_eve_container3">
						<img src={girls_valeurs} className="oeil" alt="filles qui rigolent" />
						<p className="valeur_t9">FEMMILLE</p>
						<p className="valeur_t10">
							Chez Ève,la cliente est bien plus qu’une reine, elle <br />est notre priorité, autant
							qu’elle se sente à l’aise. <br />Chaque femme est unique, chez Ève encore plus ! <br />Nous
							proposons à chaque utilisatrice de notre site <br />de pouvoir faire une recherche avancée
							en fonction <br />de ses besoins, de pouvoir être informée sur des<br /> sujets précis et
							pouvoir constituer sa box <br />personnelle (sous certaines conditions voir notre<br />{' '}
							concept), car chaque femme est différente.
						</p>
					</div>
				</div>

				<div className="green_container">
					<p>La communautève</p>
				</div>

				<div className="container_commu">
					<div className="feuille">
						<img src={feuille} alt="feuille d'automne" />
					</div>
					<div className="container_commu_text">
						<div className="left_side">
							<h3 className="commu_t1">Qu’est ce qu’être une Ève ?</h3>
							<p className="commu_t2">
								L’exigence de faire sa santé une priorité. <br /> L’envie de connaître parfaitement la
								composition des produits<br /> d’hygiènes intimes.<br /> L’ambition de briser les tabous
								sur les règles et en parler.<br /> Le désir de construire avec une marque familiale et
								engagée avec<br />
								une communauté de femmes, toutes plus uniques les unes que les<br /> autres.
							</p>
						</div>
						<div className="right_side">
							<h3 className="commu_t3">Le pourquoi du comment de la communautève </h3>
							<p className="commu_t4">
								Pour discuter et briser les tabous, il faut commencer par le faire entre<br /> filles,
								plutôt que de chuchoter et parler à voix basse quand il s’agit de<br /> demander à Clara
								ta voisine de classe pour avoir un tampon, viens<br /> t’exprimer comme tu le sens, avec
								tes mots. Pose toute les questions<br /> que tu veux en échangeant sur le groupe
								facebook <br />de la communautève.
							</p>
						</div>
					</div>
					<div classnName="femmes_ensemble" />
					<img src={girls} className="girls" alt="iamge_femmes_ensemble" />
				</div>
				<div className="green_container">
					<p>Un peu de lecture ?</p>
				</div>
				<div classname="article_container">
					<Articles />
				</div>
			</div>
		);
	}
}
