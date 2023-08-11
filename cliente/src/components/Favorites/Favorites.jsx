
import Card from "../Card/Card"
import {  useDispatch, useSelector} from "react-redux"
import style from './Favorites.module.css'
import { useEffect, useState } from "react"
import { orderCards, filterCards, todos } from "../../Redux/actions/actions"


const Favorites = () => {
   const { myFavorites, allCharacters} = useSelector((state) => {return state})
   const [boton, setBoton] = useState(false);
   const dispatch = useDispatch()

   useEffect(()=>{
      if (myFavorites === allCharacters) {
               setBoton(false)  
            }  else setBoton(true);
   }, [myFavorites, allCharacters])
  
      const handleSelect = (e) => {
            
        const {value} = e.target
        switch (value) {
         case 'ascendente':
            return dispatch(orderCards(value))
         case 'descendente':
             return dispatch(orderCards(value)) 
         case 'Male':
            return dispatch(filterCards(value))  
         case 'Female':
            return dispatch(filterCards(value))
         case 'Genderless':
            return dispatch(filterCards(value))
         case 'unknown':
            return dispatch(filterCards(value))
         default:
            break;
        }
      }
      
      const handleTodos = () => {dispatch(todos())}
      
    
      
      return (
         <div>
         <div className={style.selector}>
            <select id='seleccion' onChange={handleSelect} className={style.selectorOp}>
               <option selected>Filter Options</option>
               <optgroup label='Order by Name'>
                  <option value='ascendente'>Ascendente</option>
                  <option value='descendente'>Descendente</option>
               </optgroup>
            
       
               <optgroup label='Gender'>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Genderless">Genderless</option>
                  <option value="unknown">unknown</option> 
               </optgroup>
            
            </select>

            {
               boton ? <button className={style.selectorOp} onClick={handleTodos}>All Cards</button>
                     : <button disabled  className={style.selectorOp} >All Cards</button>
            }

         </div>
         
            <p className={style.tittleFav}>MIS FAVORITOS</p>
            <div className={style.favorites}>
              {
              myFavorites?.map(({name, species, gender, image, id}) => (
                       <Card 
                          key = {id}
                          id = {id}
                          name = {name}
                          species = {species}
                          gender = {gender}
                          image = {image}
                       /> 
                    )
                 )
           }  
            </div>        
        </div>
     )
}
// const mapStateToProps = (state) => {
//     return {
//        myFavorites: state.myFavorites 
//     }
// } 

// export default connect(mapStateToProps,null)(Favorites);
export default Favorites;
