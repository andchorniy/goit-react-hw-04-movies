import { Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import routes from "./routes";
import AppBar from "./components/AppBar";

const HomeView = lazy(() =>
  import("./view/HomeView" /* webpackChunkName: "home-view" */)
);

const MovieDetails = lazy(() =>
  import("./view/MovieDetails" /* webpackChunkName: "movie-details-view" */)
);
const MoviesView = lazy(() =>
  import("./view/MoviesView" /* webpackChunkName: "movies-view" */)
);
const App = () => (
  <div class="container">
    <AppBar />
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route path={routes.movieDetails} component={MovieDetails} />
        <Route path={routes.movies} component={MoviesView} />
      </Switch>
    </Suspense>
  </div>
);

export default App;
