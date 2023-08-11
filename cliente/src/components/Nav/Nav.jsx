
import SearchBar from '../SearchBar/SearchBar'
import style from './Nav.module.css'
import { NavLink } from 'react-router-dom'

const Nav = ({onSearch, logout}) => {
    const navLink = ({isActive}) => (isActive ? style.active : style.disable)
    return (
        <nav className={style.navBar}>
            <NavLink to='/home' className = {navLink}>Home</NavLink>
            <NavLink to='/about' className = {navLink}>About</NavLink>            
            <NavLink to='/favorites' className = {navLink}>Favorites</NavLink>
            <SearchBar onSearch={onSearch} logout={logout}/>
        </nav>
    )
}
export default Nav;