
import {  useNavigate } from "react-router-dom";
import style from './Error404.module.css';

const Error404 = () => {
  const navigate = useNavigate();
  return (  
    <div className={style.container404}>
        <h1 className={style.titulo}>Ups!!! Se a producido un error 404</h1>
        <img className={style.imagen} src="error404.jpg" alt="" />
        <button className={style.boton} onClick={()=>{navigate('/home')}}>Welcome Home</button>
    </div>
    )
}
export default Error404;