
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, TODOS, CHARACTERES, CHARACTERESERRORES, DELETEERRORAXIOS, DELETECARD, ACCESO} from "./actionsTypes";
import axios from 'axios'

// ******************* SIN EXPRESS ***********************
// export const addFav = (character) => {return {type: ADD_FAV, payload: character}};

export const addFav = (character) => {
    return async function(dispatch) {
        const endpoint = '/rickandmorty/fav';
        try {
            const response = 
                            await axios
                                      .post('/rickandmorty/fav', character)
                                      return dispatch({type: ADD_FAV, payload: response.data})
            } catch (error) {
                return dispatch({type: CHARACTERESERRORES, payload: error})
            }
        }
        
        // ************** SIN ASYNC-AWAIT *************************** 
        // const endpoint = 'http://localhost:3001/rickandmorty/fav';
        // return (dispatch) => {
            //     axios.post(endpoint, character)
            //         .then(({data}) => {
                //             return dispatch({
                    //                 type: ADD_FAV,
                    //                 payload: data
                    //             });
                    //         });
                    // };
                };
                
                // ******************** SIN EXPRESS *******************************
                // export const removeFav = (id) => {return {type: REMOVE_FAV, payload: id}};
                
                export const removeFav = (id) => {
                    
                    return async function(dispatch) {
                        const endpoint = `/rickandmorty/fav/${id}`;
                        try {
                            const response = 
                            await axios
                            .delete(`/rickandmorty/fav/${id}`)
                            return dispatch({type: REMOVE_FAV, payload: response.data})
                        } catch (error) {
                            
                            return dispatch({type: CHARACTERESERRORES, payload: error})
                        }
        }

    // ************************ SIN ASYNC-AWAIT *********************
    // const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    // return (dispatch) => {
    //     axios.delete(endpoint)
    //         .then(({data})=> {
    //             return dispatch({
    //                 type: REMOVE_FAV,
    //                 payload: data
    //             });
    //         });
    // };
};

export const filterCards = (eleccion) => {return{type:FILTER, payload: eleccion}};

export const orderCards = (order) => {return {type: ORDER, payload: order}};

export const todos = () => {return {type: TODOS}};

export const deleteCard = (filterDelete) => {return {type:DELETECARD, payload: filterDelete}}

export const characteres = (id) => {
     return async (dispatch)=> {     
        try {
            const response = await axios.get(`/rickandmorty/character/${id}`)
                                    return dispatch({type: CHARACTERES, payload: response.data})
        } catch (error) {
            if(error.request.responseText){
                return dispatch({type: CHARACTERESERRORES, payload: {message: error.request.responseText}})
            } 
            else return dispatch({type: CHARACTERESERRORES, payload: error })
        }           
    }   
       
       
        // await axios
        // // .get(`https://rickandmortyapi.com/api/character/${id}`)
        // .get(`http://localhost:3001/rickandmorty/character/${id}`)
        // .then((response) => {
        //     // if(response.error) { 
        //     //     return dispatch({type: CHARACTERESERRORES, payload: response.error})
        //     // } else
        //      return dispatch({type: CHARACTERES, payload: response.data})
        // })
        // .catch((error) => {
        //     return dispatch({type: CHARACTERESERRORES, payload: error})
        // })
}

export const acceso = (permiso) => {return {type: ACCESO, payload: permiso}}

export const deleteErrorAxios = () => {return {type: DELETEERRORAXIOS, payload: {}}}
 
