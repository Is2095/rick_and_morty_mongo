import style from './SearchBar.module.css';
import {  useState } from 'react';
//import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { characteres, acceso, deleteErrorAxios } from '../../Redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
//import  Modal  from '../Modal/Modal';
import Modal2 from '../Modal2/Modal2';
import { CHARACTERESERRORES } from '../../Redux/actions/actionsTypes';

const SearchBar = () => {
   
   const [character, setCharacter] = useState('');
   //const [cartelModal, setCartelModal] = useState({permiso:false, texto:''})
   //const [prueba, setPrueba] = useState('')
   //const [prueba2, setPrueba2] = useState(false)
   
   const {pathname} = useLocation();
   const navigate = useNavigate();
   
   const { characters } = useSelector((state)=>state);
   
   const dispatch = useDispatch();
   
   const handleInput = (e) => {
      setCharacter(e.target.value)
   }
   
   
   const onChange =  (id) => {
      
      // setPrueba(id);
      
     
      // if (prueba2) {
      //    setCartelModal({permiso: true, texto: charactersErrores.message})
      // }
      // else  {return  dispatch(characteres(id)) }  
      
      if (id) {
         if(Number(id)){
            if (characters?.find((card)=> card.id == id)) dispatch({type: CHARACTERESERRORES, payload: {message: 'Personaje Existente'}})
            else return  dispatch(characteres(id))              
         } else {
            dispatch({type: CHARACTERESERRORES, payload: {message: 'ID ingresado incorrecto'}})
            //setCartelModal({permiso: true, texto: 'ID ingresado incorrecto'})
         } 
      } else {
         dispatch({type: CHARACTERESERRORES, payload: {message: 'No A Ingresado Un Personaje'}})
         // setCartelModal({permiso: true, texto: 'No A Ingresado Un Personaje'})
      }

      // if(!id) id = 'id'
      
      // if (characters?.find((card)=> card.id == id)) {
      //    dispatch({type: CHARACTERESERRORES, payload: {message: 'Personaje Existente'}})
      // }   else  dispatch(characteres(id))
      




   }
   // const mensaje = useMemo(()=>{

   //     const probando = charactersErrores.message      
   //     console.log( probando , 'PROBANDO');
   // },[prueba]);
  

   const cierreModal = () => {
      //setCartelModal({permiso: false, texto: ''});
      dispatch(deleteErrorAxios({}));
      // mensaje= ''
   //   setPrueba2(false)
      
   }

   const logout = () => {
      dispatch(acceso(false));
      navigate('/');
   }
   
   // useEffect(()=>{ // este useEffect permite ingresar cartas sólo si se está en /home
   //    if (pathname === '/home') {
   //       document.getElementById('ingresar').removeAttribute('disabled')
   //       document.getElementById('ingresarRandom').removeAttribute('disabled')
   //    } else {
   //       document.getElementById('ingresar').setAttribute('disabled', 'disabled')
   //       document.getElementById('ingresarRandom').setAttribute('disabled', 'disabled')
   //      }
   // },[character])


   return (
      <div>

         <Modal2 cierreModal={cierreModal} /> 
         {/* {(cartelModal.permiso) ? <Modal permiso={cartelModal.permiso} texto={cartelModal.texto} cierreModal={cierreModal} /> : null} */}
         <div>
           <input className={style.entrada} type='search'  onChange={handleInput} />
         
         {(pathname === '/home') 
            ? <button id='ingresar' className={style.searchButton}  onClick={() => onChange(character)} >Agregar</button>
            : <button id='ingresar' disabled className={style.searchButton}  onClick={() => onChange(character)} >Agregar</button>}
         {(pathname === '/home') 
          ? <button id='ingresarRandom' className={style.searchButton}  onClick= {()=>onChange(Math.floor(Math.random()*826))}>Random</button>
          : <button id='ingresarRandom' disabled className={style.searchButton}  onClick= {()=>onChange(Math.floor(Math.random()*826))}>Random</button>}
        
         <button className={style.buttonLogout} onClick={logout}>Logout</button>  
         </div>
        
      </div>
   );
};
export default SearchBar;
