
import style from './About.module.css'
const About = () => {
    return (
        <div className={style.container}>
            <p className={style.bienvenido}> Aplicación de Rick and Morty </p>
            <div className={style.tittle}>
                <p>Descripción</p>
                <p>Contenido</p>
                <p>Creador</p>
            </div>
            <div className={style.text}>
                <p className={style.descripcion}>SPA realizada utilizando los conocimiento adquiridos en SoyHenry, compañeros e internet. La actualización es permanente, debido a la aplicación de cada tema e idea aprendida</p>
                <p className={style.descripcion}>En esta aplicación podrás encontrar 826 personaje de Rick and Morty, con sus nombre, imagen y otros datos de interés</p>
                <p className={style.creador}>ISMAEL</p>
            </div>
            <br />
            <br />
            <br />
            <p className={style.derechos}>Todos los derechos reservados</p>
        </div>
    )
}
export default About;
