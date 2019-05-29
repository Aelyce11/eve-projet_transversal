import React, { Component } from 'react'
import api from '../Api'

export default class NewProduct extends Component {

  constructor() {
    super()

    this.state = {
      image: '',
      id_category: 0,
      id_vendor: 0,
      title: '',
      desc: '',
      utilisation: '',
      absorbtion: '',
      flow: '',
      volume: '',
      made_in: '',
      lifetime:'',
      sealing: 0,
      ecology: 0,

    }
  }
  
  componentDidMount() {
    api.addProduct(this.state.title, this.state.id_vendor, this.state.id_category, this.state.image, this.state.desc, this.state.utilisation, this.state.absorbtion, this.state.flow, this.state.volume, this.state.composition, this.state.made_in, this.state.lifetime, this.state.sealing, this.state.ecology, this.state.price, this.state.quantity)
  }
  render() {
    console.log(this.state)
    return(
        <div className="container">
            <h1>New Product</h1>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Category</label>
          </div>
          <div class="field-body">
            <div class="field is-narrow">
              <div class="control">
                <div class="select is-fullwidth">
                  <select onChange={(e) => { this.setState({id_category: parseInt(e.target.value)})}}>
                    <option value="1">Boîte</option>
                    <option value="2">Cup</option>
                    <option value="3">Serviette</option>
                    <option value="4">Tampon</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="file has-name is-fullwidth">
              <label class="file-label">
                <input class="file-input" type="file" onChange={(e) => { this.setState({ image: e.target.value.replace(/^.*\\/, "")}) }} />
                <span class="file-cta">
                  <span class="file-label">
                    Choose a file…
                  </span>
                </span>
                <span class="file-name">
                  {this.state.image}
                </span>
              </label>
            </div>

          </div>
        </div>


        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Titre</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="Titre ..." value={this.state.title} onChange={(e) => { this.setState({title: e.target.value}) }} />
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Description</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea class="textarea" placeholder="Description ..." value={this.state.desc} onChange={(e) => { this.setState({desc: e.target.value}) }}></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Utilisation</label>
          </div>
          <div class="field-body">
            <div class="field">
                <input class="input" type="text" placeholder="" value={this.state.utilisation} onChange={(e) => { this.setState({utilisation: e.target.value}) }}/>
            </div>
            
            <div class="field-label is-normal">
              <label class="label">Absorbtion</label>
            </div>
            <div class="field">
                <input class="input" type="text" placeholder="" value={this.state.absorbtion} onChange={(e) => { this.setState({absorbtion: e.target.value}) }} />
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Flux</label>
          </div>
          <div class="field-body">
            <div class="field">
                <input class="input" type="text" placeholder="" value={this.state.flow} onChange={(e) => { this.setState({flow: e.target.value}) }} />
            </div>
            
            <div class="field-label is-normal">
              <label class="label">Contenance</label>
            </div>
            <div class="field">
                <input class="input" type="text" placeholder="" value={this.state.volume} onChange={(e) => { this.setState({volume: e.target.value}) }} />
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Fabriqué</label>
          </div>
          <div class="field-body">
            <div class="field">
                <input class="input" type="text" placeholder="" value={this.state.made_in} onChange={(e) => { this.setState({made_in: e.target.value}) }}/>
            </div>
            
            <div class="field-label is-normal">
              <label class="label">Durée de vie</label>
            </div>
            <div class="field">
                <input class="input" type="text" placeholder="" value={this.state.lifetime} onChange={(e) => { this.setState({lifetime: e.target.value}) }} />
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Composition</label>
          </div>
          <div class="field-body">
            <div class="field">
                <input class="input" type="text" placeholder="" value={this.state.composition} onChange={(e) => { this.setState({made_in: e.target.value}) }}/>
            </div>
            
            <div class="field-label is-normal">
              <label class="label">Quantité</label>
            </div>
            <div class="field">
                <input class="input" type="text" placeholder="" value={this.state.quantity} onChange={(e) => { this.setState({lifetime: e.target.value}) }} />
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Marques</label>
          </div>
          <div class="field-body">
            <div class="field is-narrow">
              <div class="control">
                <div class="select is-fullwidth">
                  <select onChange={(e) => { this.setState({id_vendor: parseInt(e.target.value)})}}>
                    <option value="0"></option>
                    <option value="1">Avril</option>
                    <option value="2">Imsevimse</option>
                    <option value="3">Lunacopine</option>
                    <option value="4">Mooncup</option>
                    <option value="5">Natracare</option>
                    <option value="6">Naty</option>
                    <option value="7">Puraloe</option>
                    <option value="8">Silvercare</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Etanchéité</label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div class="control">
                  <div class="select is-fullwidth">
                    <select onChange={(e) => { this.setState({sealing: parseInt(e.target.value)})}}>
                      <option value="0"></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Ecologie</label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div class="control">
                  <div class="select is-fullwidth">
                    <select onChange={(e) => { this.setState({ecology: parseInt(e.target.value)})}}>
                      <option value="0"></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
          <div class="field-label"></div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <button class="button is-primary" onClick={() => {this.addProduct()}}>
                    Ajouter le produit
                  </button>
                </div>
              </div>
            </div>
          </div>

      </div>
    )
  }
}