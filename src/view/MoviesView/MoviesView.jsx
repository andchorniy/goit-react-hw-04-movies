import { Component } from "react";
import api from '../../Api/api'
import MoviesList from '../../components/MoviesList'
import style from './MoviesView.module.css'


class MoviesView extends Component {
    state={
        value: '',
        movies: [],
    }
    componentDidMount(){
        if(this.props.location.search){
            const query = this.props.location.search.replace('?query=', '')
            this.makeRequest(query)
        }
    }
    handleInputChange=(e)=>{
       this.setState({value:e.target.value })
    }
    makeRequest = async(query)=>{
        const response = await api.fetchMovieByName(query)
        this.props.history.push({
            pathname: this.props.location.pathname,
            search: `query=${query}`,
         });
         this.setState({value: '', movies: response.data.results })
    }
    submitSearch = (e) => {
        e.preventDefault()
       this.makeRequest(this.state.value)
    }
    render(){
        return (
        <div>
            <form onSubmit={this.submitSearch}>
                <input type="text" value={this.state.value} className={style.input} onChange={this.handleInputChange}/>
                <button type="submit" className={style.button} >Serch</button>
            </form>
            
                <MoviesList movies={this.state.movies} location={this.props.location} />
            
        </div>
    );
}
};

export default MoviesView;