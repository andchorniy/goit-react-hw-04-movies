import  { Component } from 'react';
import api from '../../Api/api'
import MoviesList from '../../components/MoviesList'

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
                
                    <MoviesList movies={this.state.movies} location={this.props.location} />
                
            </div>
    );
    }
};


export default HomeView;