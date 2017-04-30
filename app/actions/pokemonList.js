import axios from "axios";

export function getAllPokemon(){
    return function (dispatch){
      dispatch({type : "FETCH_ALL_POKEMON_START"})
      axios.get("https://pokeapi.co/api/v1/pokedex/")
      .then(function(response){
          var result = response.data.objects[0].pokemon;
          dispatch({type : "FETCH_ALL_POKEMON_DONE",payload : result});
      })
      .catch(function(error){
          dispatch({type : "FETCH_ALL_POKEMON_ERROR",payload : error});
      })
    }
}

export function getPokemonInfo(id){
    return function(dispatch){
        dispatch({type: 'HIDE_SLIDESHOW'});
        dispatch({type: 'SHOW_CONTENT'});
        let url = `http://pokeapi.co/api/v2/pokemon/${id}`;
        axios.get(url)
        .then(function(response){
            dispatch({type: "UPDATE_CONTENT", payload: response.data, id: id})
        })
        .catch(function(error){
            console.log(error)
        })
    }
}
