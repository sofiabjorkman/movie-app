import './App.css';
import ManageMovies from './pages/admin/ManageMovies';
import CreateMovie from './pages/admin/CreateMovie';
import UpdateMovies from './pages/admin/UpdateMovies';
import Movies from './pages/Movies';
import Nav from './components/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            <Route path="/" exact component={Movies} />
            <Route path="/admin" component={ManageMovies} />
            <Route path="/create-movie" exact component={CreateMovie} />
            <Route path="/admin/update-movies/:id" component={UpdateMovies} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
