import React from 'react';
import ReactDOM from 'react-dom';
import * as headerStyles from "./styles/pokemonCard.scss";

export default class PokemonCard extends React.Component{

  render(){
    return(
      <div class = "card">
        <img class = "pokemonImage" src = {this.props.src}/>
          <div class = "pokemonInfo">
            <div class = "pokemonId">
              {this.props.id}
            </div>
            <div class = "pokemonName">
              {this.props.name}
            </div>
          </div>
      </div>
    );
  }

}
