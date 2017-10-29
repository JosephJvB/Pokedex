import React from 'react'

import Pokedex from './Pokedex'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      
    }
  }

  
  render () {
    return (
      <div>
       im a pokedex
       <Pokedex />
      </div>
    )
  }
}
