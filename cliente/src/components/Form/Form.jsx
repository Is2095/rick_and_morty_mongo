
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import style from './Form.module.css';
//import Modal  from '../Modal/Modal';
import Validation from "../Validation/Validation";
import { acceso } from '../../Redux/actions/actions';

import { CHARACTERESERRORES } from "../../Redux/actions/actionsTypes";
import Modal2 from '../Modal2/Modal2';

const Form = () => {

  const [userData, setUserData] = useState({username: '', password: ''});
  const [errors, setErrors] = useState({username: '', password: ''});
  //const [cartelModal, setCartelModal] = useState({estado: false, texto: ''})
 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //const usernameSeguridad = 'ismael@gmail.com',
  //        passwordSeguridad = '123456';

  // useEffect(()=>{
  //   if (errors.username === undefined && errors.password === undefined) {
  //     document.getElementById('buttonLogin').removeAttribute('disabled')
  //   } else document.getElementById('buttonLogin').setAttribute('disabled','disabled');
  // },[userData])

  // const handleInput = (e) => {
  //   //setCartelModal({estado: false, texto: ''})
  //   const {name, value} = e.target    
  //   setUserData ({...userData, [name]: value});
  //   setErrors(Validation({...userData, [name]: value}));
  // }
  
  // const mostrar = () => {
  //   document.getElementById('password').type = "text";               
  //   document.getElementById("ojo").src = 'uno.jpg';
  //   setTimeout(()=>{
  //     document.getElementById("password").type="password";
  //     document.getElementById("ojo").src = 'tres.jpg';
  //   },800);  
  // }

//-------------------------------------------------------------------------------


// ******************** ASYNC-AWAIT **********************

const onSubmit = async (e) => {
  e.preventDefault();
  // const { username, password } = userData;
  const username='hola';
  const password='hola';
  const URL = 'http://localhost:3001/rickandmorty/login/';
  try {
    const response = await  axios('/rickandmorty/login/' + `?email=${username}&password=${password}`);
    const {access} = response.data;

    dispatch(acceso(access));
    navigate('/home');
    
    } catch (error) {
      dispatch(acceso(error.access))   
      dispatch({type: CHARACTERESERRORES, payload: {message: `DATOS INGRESADOS INCORRECTOS`}}) 
      }
}

  // ******************* CON EXPRESS SIN ASYNC-AWAIT *****************
  // const onSubmit = (e) => {
  //     e.preventDefault();
  //     const { username, password} = userData;
  //     const URL = 'http://localhost:3001/rickandmorty/login/';

  //     axios(URL + `?email=${username}&password=${password}`)
  //           .then(({data}) => {
  //             const {access} = data;              
  //                 dispatch(acceso(true))       
  //                 setCartelModal({estado:false, texto:''})
  //                 navigate('/home');             
  //           })
  //           .catch((error)=>{
  //             dispatch(acceso(false))        
  //                   setCartelModal({permiso: true, texto: `DATOS INGRESADOS INCORRECTOS`})
  //           })

// *************** SIN EXPRESS **************************
      // if(userData.username === usernameSeguridad && userData.password === passwordSeguridad) {
          // dispatch(acceso(true))       
          // setCartelModal({estado:false, texto:''})
          // navigate('/home');
      // }else {
          // dispatch(acceso(false))        
          // setCartelModal({permiso: true, texto: 'DATOS INGRESADOS INCORRECTOS'})
      // }
  //}
  
    const cierreModal = () => {
      dispatch({type: CHARACTERESERRORES, payload: {}});
      // setCartelModal({permiso:false, texto:''})
    }

  return (
    <div className={style.imagen}>
      <div className={style.container}>
        
      <Modal2 cierreModal={cierreModal}/>
      {/* {(cartelModal.permiso) ? <Modal texto={cartelModal.texto} cierreModal={cierreModal}/> : null}  */}
      <p className={style.cartel}>APLICACION DE RICK AND MORTY</p>
      <p className={style.cartelBienvenido}>BIENVENIDO</p>
      <form onSubmit={onSubmit}>
        {/* <div className={style.entradaDato}>
          <label htmlFor="username">Usename: </label>
          <input 
            className={style.input1}
            type="text" 
            name = 'username' 
            placeholder='Ingrese cualquier email...'
            onChange={handleInput}
            value={userData.username}
            />
          {errors.username && <p className={style.error}>{errors.username}</p>}
        </div> */}

        {/* <div className={style.entradaDato}>
          <label htmlFor="password">Password: </label>   
          <input 
            id="password"
            className={style.input1}
            type="password" 
            name = 'password' 
            placeholder="Ingrese cualquier password..."
            onChange={handleInput}
            value={userData.password}
            />
          <img id = "ojo" className={style.ojo} onClick={()=>{mostrar()}} src="tres.jpg" alt="" />      
          {errors.password && <p className={style.error}>{errors.password}</p>}
        </div> */}

        <div className={style.buttonLogin}>
          {/* <button id='buttonLogin' type= 'onSubmit'className={style.buttonL} disabled>LOGIN</button> */}
          <button id='buttonLogin' type= 'onSubmit'className={style.buttonL}>ENTRAR</button>
        </div>
      </form>
      </div>
    </div>
  )
}
export default Form;