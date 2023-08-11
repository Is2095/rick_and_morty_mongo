
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from './Detail.module.css';
import {  useSelector } from "react-redux";
// import { getCardDetail } from "../../Redux/actions/actions";

const Detail = () => {

    const {detailId} = useParams()
    const navigate=useNavigate()

    const [character, setCharacter] = useState()
    const {characters} = useSelector(state => state)

    useEffect(()=>{
      const [filterDetail] = (characters?.filter(card=>  (card.id).toString() === detailId))
      setCharacter(filterDetail)
    },[detailId, characters])

    // useEffect(() => {
    //     fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
    //       .then((response) => response.json())
    //       .then((char) => {
    //         char.name ? setCharacter(char) :
    //         alert("No hay personajes con ese ID")
    //       //   if (char.name) {
    //       //     setCharacter(char);
    //       //   } else {
    //       //       window.alert("No hay personajes con ese ID");
    //       //   }
    //       })
    //       .catch((err) => {
    //         console.log(err)
    //         alert("Hubo un error");
    //       });
    //     return () => setCharacter({}); 
    //   }, [detailId]);
    
    return (
      <div className={style.principal}>
          {/* <div className={style.detail} style={{backgroundImage:`url(${character?.image})`, backgroundRepeat: "no-repeat", backgroundSize: "contain"}}/> */}
        <img src={character?.image} className={style.detail} alt='not found'></img>
        <div className={style.data}>
          <br />
          <div className={style.containerDatos}>
            <div className={style.nombre}>
              <p className={style.ps}>NOMBRE: {character?.name}</p>       
              {/* <p style={{textDecorationLine: 'underline', marginTop:'10px', marginBottom: '15px'}}>NOMBRE: {character?.name}</p>        */}
              <button className={style.buttonBack} onClick={()=>navigate('/home')}>BACK</button>             
            </div>
            <p className={style.ps}>ESTADO: {character?.status}</p>
            <p className={style.ps}>ESPECIES: {character?.species}</p>
            <p className={style.ps}>GÉNERO: {character?.gender}</p>
            <p className={style.ps}>ORIGEN: {character?.origin?.name}</p> 
            <p className={style.ps}>LOCATION: {character?.location?.name}</p>
          </div>
        </div>
      </div>
    )
}

export default Detail;