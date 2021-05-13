import { Route, Switch } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import AppBar from "./components/AppBar";
import HomeView from "./view/HomeView";
import MovieDetails from "./view/MovieDetails";
import MoviesView from "./view/MoviesView";

const App = () => (
  <div class="container">
    <AppBar />
    <Switch>
      <Route exact path={routes.home} component={HomeView} />
      <Route path={routes.movieDetails} component={MovieDetails} />
      <Route path={routes.movies} component={MoviesView} />
    </Switch>
  </div>
);

export default App;
