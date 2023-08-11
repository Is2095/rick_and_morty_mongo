
import { useDispatch, useSelector } from 'react-redux';
import Card from './../Card/Card';
import style from './Cards.module.css'
import { deleteCard} from '../../Redux/actions/actions';

export default function Cards() {
 
   const dispatch = useDispatch();
   const {characters} = useSelector(state=>state);

   const onClose = (id) => {
      const filterDelete = (characters.filter(character=>character.id !==id))
      dispatch (deleteCard(filterDelete))
   }
    
   return (
      <div className={style.cards}>
         {
            characters?.map(({name, species, gender, image, id}) => (
                  <Card 
                     key = {id}
                     id = {id}
                     onClose={() => onClose(id)}
                     name = {name}
                     species = {species}
                     gender = {gender}
                     image = {image}
                  />
                  )
            )
         }
      </div>
   )
}
