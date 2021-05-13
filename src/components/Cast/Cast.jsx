import style from './Cast.module.css'

const Cast = ({cast}) =>  {
        return (
            <ul className={style.list}>
                {cast.map(actor=> 
                <li className={style.item} key={actor.cast_id}>
                   <img src={ actor.profile_path && `https://image.tmdb.org/t/p/w500${actor.profile_path}`}  alt={actor.name} width="200"/>
                   <h3>{actor.name}</h3>
                   <p>{actor.character}</p>
                </li>)}
            </ul>
    );

};



export default Cast;