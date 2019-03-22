//conectarnos a una api de pokemon con axios
import React, { Component } from 'react';
import Axios from 'axios';


class PokemonList extends Component {

  state = {
    
    pokemons: [],
    // loading: true,
    status: 'isLoading'
  }
  
  renderPokemonList = () => {
    return(
      this.state.pokemons.map(pokemon => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))
    )
  }

  componentDidMount(){
    Axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(({data}) => {
      console.log(data)
      this.setState({
        pokemons: data.results,
        status: 'isLoaded',
      })
    })
    .catch((error)=>{
      this.setState({
      status: 'isError'-

    })
  })
  }

  render(){

    const {status} = this.state
    switch (status) {
      
      case 'isLoading':
        return 'Loading...';
      case 'isLoaded': 
        return (
          <div>
            <h1>Pokemons</h1>
            {this.renderPokemonList()}
          </div>
        )
        case 'isError':
          return 'isError'
                   
      }
  }
}

export default PokemonList