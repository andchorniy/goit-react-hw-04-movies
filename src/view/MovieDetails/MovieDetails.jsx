import { Component } from "react";
import api from '../../Api/api'

class MovieDetails extends Component{
    state = {
        original_title: '',
        genres:[],
        release_date: '',
        backdrop_path: '',
        overview: ''
    }
    async componentDidMount(){
        
        const {movieId} = this.props.match.params
        const movie = await api.fetchMovieById(movieId)
        this.setState({ ...movie.data})
        
    }
    render(){
      const  {original_title, genres, release_date, backdrop_path, overview } = this.state
        return (
            <div>
            <h1>{original_title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={original_title}/>
            <p>{genres.map(genre=> genre.name)}</p>
            <p>{release_date}</p>
            <p>{overview}</p>
        </div>
    );
}
};

export default MovieDetails;