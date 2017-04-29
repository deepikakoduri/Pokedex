export default function reducer(state = {
    list: [],
    selected: {},
    fetching: false,
    fetched: false,
    anyerror: false,
    message: ""
},
action){

    switch (action.type) {

      case "FETCH_ALL_POKEMON_START":
          state = Object.assign({}, state , {fetching: true, anyerror: false, fetched: false, message: ""});
          break;

      case "FETCH_ALL_POKEMON_DONE":
          state = Object.assign({}, state , {fetching: false, anyerror: false, fetched: true, message: "", list: action.payload});
          break;

      case "FETCH_ALL_POKEMON_ERROR":
          state = Object.assign({}, state , {fetching: false, fetched: true, anyerror: true, message: action.payload});
          break;

    }

    return state;
}
