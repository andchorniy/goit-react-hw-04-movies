import { Route, Switch } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import AppBar from "./components/AppBar";
import HomeView from "./view/HomeView";
import MovieDetails from "./view/MovieDetails";

const App = () => (
  <>
    <AppBar />
    <Switch>
      <Route exact path={routes.home} component={HomeView} />
      <Route exact path={routes.movieDetails} component={MovieDetails} />
    </Switch>
  </>
);

export default App;
