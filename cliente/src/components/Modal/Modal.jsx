
import style from './Modal.module.css'
import { useEffect } from 'react'

const Modal = ({texto, cierreModal}) => {    

    useEffect(() => {document.getElementById('modal1').style.display = 'block'}); 
  
        const cerrarModal = () => {
            document.getElementById('modal1').style.display = 'none'   
            cierreModal()
        }
    
    return (
        <div id="modal1" className={style.modal}  >
            <div  className={style.modalContainer} >
                <p className={style.texto}>{texto}</p>
                <button type='reset'className={style.close} onClick={()=>cerrarModal()}>x</button>
            </div>
        </div>
    )
}
export default Modal;