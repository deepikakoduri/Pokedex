import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import * as layoutStyles from "./css/layout.css";
import PokemonList from "./PokemonList";
import NavBar from "./NavBar";


@connect((store) => {
  return {
    layout: store.layout
  }
})

export default class Layout extends React.Component{

  render(){

    return(<div class = "layout">
        <NavBar/>
        <PokemonList/>
        </div>)
  }
}
