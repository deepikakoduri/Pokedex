import React from 'react';
import ReactDOM from 'react-dom';
import * as headerStyles from "./styles/navBar.scss";

export default class PokemonCard extends React.Component{

  render(){
    return(
      <div class = "navBar">
        <ul>
          <li>
            Pokedex
          </li>
          <li>
            Feeling Lucky
          </li>
          <li>
            <input type = "text"/>
            <input type = "submit" class= "searchButton" value = "Search"/>
          </li>
        </ul>
      </div>
    );
  }

}
