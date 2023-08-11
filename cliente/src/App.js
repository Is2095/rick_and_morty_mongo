
import style from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import Error404 from './components/Error404/Error404';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App () {

  let {pathname} = useLocation();
  const navigate = useNavigate()
  const { accesoApi } = useSelector(state => state);

  useEffect(() => {
    if (accesoApi===false) navigate('/')
  },[accesoApi])

  return (
    <div className={style.App} id='hola'>

      <div className={style.pruebafondo}>

        {/* {(cartelModal.permiso) ? <Modal texto={cartelModal}/> : null} si no hay permiso (cartelModal.permiso=true, renderiza un modal con el error) */}
        {pathname === '/home' && accesoApi===true  ? <div className={style.cartel}/> : null} {/*el cartel de Rick and Morty sólo aparece si está en home y detail */}
        {/* {pathname !== '/' && pathname !== '/about' && pathname !== '/favorites' ? <div className={style.cartel}/> : null} el cartel de Rick and Morty sólo aparece si está en home y detail */}
          
      </div>
        
        <div className={style.nav}>
          {pathname !== '/' && accesoApi === true ? <Nav/> : <Form/>}   
        </div >
        {
          (pathname !=='/' && accesoApi === true) ? 
            <Routes>     
              <Route path='/home' element={<Cards/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/detail/:detailId' element={<Detail/>}/> 
              <Route path='/favorites' element={<Favorites/>} />
              <Route path= '*' element={<Error404/>}/>
              {/* <Route path= '*' element={<Modal texto={{permiso: true, texto: 'UPS!!! SE HA PRODUCIDO UN ERROR: error 404'}}/>}/> */}
            </Routes>
          : null
        }
        {
        pathname === '/home' && accesoApi === true 
        ? <div className={style.fo}>
            <footer >
            <a href='#hola' className={style.regreso}>inicio</a>
            </footer>
          </div>
        : null
        }
      </div>
  )
}

export default App
