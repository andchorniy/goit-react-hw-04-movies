import  { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../Api/api'
// import routes from "../../routes";

class HomeView extends Component {
    state ={
        movies:[]
    }

    async componentDidMount(){
        const moviesList = await api.fetchPopularMovies().then(res=> res.data.results)
        this.setState({movies: moviesList})
    }
    render(){
        return (
            <div>
                <h1>Popular movies</h1>
                <ul>
                    {this.state.movies.map(movie=> <li key={movie.id}> <Link to={`/movies/${movie.id}`}> {movie.title ?? movie.original_name } </Link></li> )}
                </ul>
            </div>
    );
    }
};


export default HomeView;