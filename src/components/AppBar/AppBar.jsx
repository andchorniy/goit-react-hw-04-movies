
import routes from "../../routes";
import {NavLink} from 'react-router-dom'

const AppBar = () => {
    
        return (
            <nav>
                <NavLink to={routes.home}> Home </NavLink>
                <NavLink to={routes.movies}> Movies </NavLink>
            </nav>
    )
};



export default AppBar;