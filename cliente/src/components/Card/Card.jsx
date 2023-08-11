
import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/actions/actions';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { connect} from 'react-redux';

function Card({name, species, gender, image, onClose, id}) {

   //const myFavorites = useSelector((state) => {return state.myFavorites})
   const {myFavorites} = useSelector((state)=>{return state})
   // const {myFavorites}=state;
   const dispatch = useDispatch();

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(id));
      } else {
         setIsFav(true);
         dispatch(addFav({name, species, gender, image, onClose, id}));
      }  
   }

   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id == id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]); //cada vez se modifique myFavorites se va a mapear y demás del useEffect

   return (
      <div className={style.container}>
         <div className={style.buttonContainer}>

               {
                  isFav ? (<button className={style.botonCorazon} onClick={handleFavorite}>❤️</button>)
                        : (<button className={style.botonCorazon} onClick={handleFavorite}>🤍</button>)
               }
            
               {
                  isFav ? null 
                      : (<button className={style.boton} onClick={onClose}>X</button>)
               }

         </div>

         <Link to={`/detail/${id}`}>
            <div className={style.imagen}>
               <img  src={image} alt={name}/>
               <p className={style.nombre}>Nombre: {name}</p>
            </div>
         </Link>

         <div className={style.datos}>
            <h2 className={style.datosh2}>Species: {species}</h2>
            <h2 className={style.datosh2}>Gender: {gender}</h2> 
         </div>
         
      </div>
   );
}

// const mapStateToProps = (state) => {
//    return {
//       myFavorites: state.myFavorites
//    }
// }
// const mapDispatchToProps = (dispatch) => {
//    return {
//       addFav: (character)=>{dispatch(addFav(character))},
//       removeFav: (id)=>{dispatch(removeFav(id))}
//    }
// }
// export default  connect(mapStateToProps, mapDispatchToProps)(Card);
export default Card;