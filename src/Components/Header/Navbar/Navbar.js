import './Navbar.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import box from '../../../Pictures/icons/darkgreen/box-stroke.svg'
import cup from '../../../Pictures/icons/darkgreen/cup-stroke.svg'
import pad from '../../../Pictures/icons/darkgreen/pad-stroke.svg'
import tampon from '../../../Pictures/icons/darkgreen/tampon-stroke.svg'
import feather from '../../../Pictures/icons/darkgreen/feather-stroke.svg'
import tag from '../../../Pictures/icons/darkgreen/tag-stroke.svg'
import newspaper from '../../../Pictures/icons/darkgreen/newspaper-stroke.svg'
import notepad from '../../../Pictures/icons/darkgreen/notepad-stroke.svg'

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar">
				<Link to="">
					<img src={box} alt="Les boîtes" />
					<p>Les boîtes</p>
				</Link>
				<Link to="">
					<img src={cup} alt="Les cups" />
					<p>Les boîtes</p>
				</Link>
				<Link to="">
					<img src={pad} alt="Les serviettes" />
					<p>Les serviettes</p>
				</Link>
				<Link to="">
					<img src={tampon} alt="Les tampons" />
					<p>Les tampons</p>
				</Link>
				<Link to="">
					<img src={feather} alt="Le confort" />
					<p>Le confort</p>
				</Link>
				<Link to="">
					<img src={tag} alt="Les marques" />
					<p>Les marques</p>
				</Link>
				<Link to="">
					<img src={newspaper} alt="Le blog" />
					<p>Le blog</p>
				</Link>
				<Link to="">
					<img src={notepad} alt="Les guides" />
					<p>Les guides</p>
				</Link>
			</nav>
		)
	}
}
