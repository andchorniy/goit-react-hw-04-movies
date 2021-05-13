import { Link } from 'react-router-dom';
import style from './MoviesList.dodule.css'
const MoviesList = ({movies, location}) => {
    return (
        <ul className={style.list}>
            {movies.map(movie=> <li key={movie.id} > <Link  to={{pathname:`/movies/${movie.id}`, state: { from: location }, }} > {movie.title ?? movie.original_name } </Link></li> )}
        </ul>
    );
};

export default MoviesList;