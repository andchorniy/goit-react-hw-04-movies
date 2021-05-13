import { Component } from "react";
import api from '../../Api/api'
import routes from "../../routes";
import { Link, Route, Switch } from 'react-router-dom'
import Cast from '../../components/Cast'
import Review from '../../components/Review'
import style from './MovieDetails.module.css'

class MovieDetails extends Component{
    state = {
        original_title: '',
        genres:[],
        release_date: '',
        backdrop_path: '',
        overview: '',
        vote_average: '',
        cast: [],
        review: []
    }
    async componentDidMount(){
        const {movieId} = this.props.match.params
        const movie = await api.fetchMovieById(movieId)
        const cast = await api.fetchCast(movieId)
        const review = await api.fetchReview(movieId)
        this.setState({ ...movie.data, cast: cast.data.cast, review: review.data.results })         
    }
    handleClick=()=>{
        const { location, history } = this.props;
        
        history.push(location?.state?.from || routes.home)
    }
    render(){
      const  {original_title, genres, release_date, poster_path, overview,vote_average } = this.state
      const { match} = this.props
        return (

        <div className={style.wrapper}>
            <button type="button" onClick={this.handleClick} className={style.button}> Back</button>
            <div className={style.movie}>
                <img src={ poster_path && `https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} className={style.image} width={300}/>
                <div className={style.descr}>
                <h1 className={style.header}>{`${original_title}(${release_date.split('-')[0]})`}</h1>
                <p className={style.score} >{`User score: ${vote_average*10}%`}</p>
                <h2 >Overview</h2>
                <p className={style.overview}>{overview}</p>
                <h2 >Genres</h2>
                <ul className={style.genresList}>{genres.map(genre=> <li key={genre.id}>{genre.name} </li>)} </ul>
                </div>
            </div>
            <div>
                <h2>Additional information</h2>
                <ul>
                    <li><Link to={{pathname: `${match.url}/cast`, state:{from: this.props.location.state?.from || routes.home}}}>Cast</Link></li>
                    <li><Link to={{pathname: `${match.url}/reviews`, state:{from: this.props.location.state?.from || routes.home}}}>Review</Link></li>
                </ul>
                <Switch>
                    <Route path={routes.cast} render={props=> <Cast {...props}  cast={this.state.cast}/>}/>
                    <Route path={routes.review} render={props=> this.state.review.length ? <Review {...props} reviews={this.state.review}/> : <p>No reviews</p>}/>
                </Switch>
            </div>
        </div>
    );
}
};

export default MovieDetails;