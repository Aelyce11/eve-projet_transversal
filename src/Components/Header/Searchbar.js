import React, { Component } from 'react'
import icon_search from '../../Pictures/header/icons/search_white.svg'

export default class Searchbar extends Component {
	render() {
		return (
			<div id="searchbar">
				<form>
					<div className="input">
						<input type="text" placeholder="Recherche..." />
						<button>
							<img src={icon_search} />
						</button>
					</div>
					<div className="dropdown">
						<formarea>
							<label>
								Trouvez ce dont <strong>vous</strong> avez besoin :
							</label>
							<div>Things</div>
						</formarea>
					</div>
				</form>
			</div>
		)
	}
}
