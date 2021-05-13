import style from './AppBar.module.css'
import routes from "../../routes";
import {NavLink} from 'react-router-dom'

const AppBar = () => {
    
        return (
            <nav className={style.nav}>
                <NavLink exact to={routes.home} className={style.navLink} activeClassName={style.activeNavLink}> Home </NavLink>
                <NavLink to={routes.movies} className={style.navLink} activeClassName={style.activeNavLink}> Movies </NavLink>
            </nav>
    )
};



export default AppBar;