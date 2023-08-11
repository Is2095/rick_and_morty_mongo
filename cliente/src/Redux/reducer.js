
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, TODOS, CHARACTERES, DELETECARD, ACCESO, CHARACTERESERRORES, DELETEERRORAXIOS} from "./actions/actionsTypes";


const initialState = {
    myFavorites:[],
    allCharacters: [],
    characters: [],
    charactersErrores: {},
    accesoApi: false
}

 const reducer = (state= initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload

// ********************* SIN EXPRESS **********************
                // ...state,
                // myFavorites: [...state.myFavorites, payload],
                // allCharacters: [...state.allCharacters, payload]

            }
            
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload
            }


// *************************** SIN EXPRESS *******************************
            // const filterId = state.allCharacters.filter((ele) => ele.id !== payload)
            // return {
            //     ...state,
            //     myFavorites: filterId,
            //     allCharacters: filterId
            // }
        case FILTER: 
            let filterChar = [...state.allCharacters].filter((el)=> el.gender === payload)
            return {
                ...state,
                myFavorites:  filterChar
            }

        case ORDER: 
        //let asc = (state.selectCharacters).sort((a,b)=> a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
            
            if (payload === 'ascendente') {
                return {
                ...state,
                myFavorites: state.allCharacters.sort((a,b)=> a.name.localeCompare(b.name))
                }
            }
            
            if (payload === 'descendente') { 
                return {
                    ...state,
                    myFavorites: state.allCharacters.sort((a,b)=> b.name.localeCompare(a.name))
                }
            }

            break;
            
        case TODOS: 
            return {
                ...state,
                myFavorites: state.allCharacters
            }

        case CHARACTERES:
            return {
                ...state,
                characters: [...state.characters, payload]
            }
        case CHARACTERESERRORES:
            return {
                ...state,
                charactersErrores: payload
            }
        case DELETEERRORAXIOS:
            return {
                ...state,
                charactersErrores: payload
            }
        case DELETECARD:
            return {
                ...state,
                characters: payload
            }
        case ACCESO:
            return {
                ...state,
                accesoApi: payload
            }
        
        default: 
            return {...state}
    }
}
export default reducer;