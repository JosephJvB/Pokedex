import React from 'react'
import puppeteer from 'puppeteer'

import getPokemon from '../getPokemon'
import {pokemon} from '../../pokedex'

class Pokedex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pokemon: ''
    }
    // binds ehre
    this.getPokemon = this.getPokemon.bind(this)
  }
// handlers here

choosePokemon (pokemon) {
  this.setState({
    pokemon
  })
}

  render () {
    return (
      <div>
        <select id="mon">
          {pokemon.map(mon => <option value={mon}>{mon}</option>)}
        </select>
        <button onClick={getPokemon(document.getElementById('mon').value)}>i choose you</button>
        </div>
    )
  }
}