import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import PokemonCard from "./PokemonCard";
import {getAllPokemon} from "../actions/pokemonList";
import * as pokemonListStyles from "./css/pokemonList.css"

@connect((store) => {
  return {
    pokemonList: store.pokemonList
  };
})

export default class PokemonList extends React.Component{

  componentWillMount(){
      this.props.dispatch(getAllPokemon())
  }

  createCard(a){
      let id = a.resource_uri.split('/')[3];
      if (id > 720)
        return;
      let src =  `components/resources/pokemon/${id}.png`
      return <PokemonCard key = {id} id = {id} name = {a.name.toUpperCase()} src = {src}/>
  }

  getAllPokemon(){
      var {pokemonList} = this.props;
      var pokemonList = pokemonList.list.map((a) => this.createCard(a))
      return pokemonList;
  }

  render(){
    return(
        <div class = "flexContainer">
            {this.getAllPokemon()}
        </div>
    );
  }

}
