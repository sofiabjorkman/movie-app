import './App.css';
import ManageMovies from './pages/admin/ManageMovies';
import CreateMovie from './pages/admin/CreateMovie';
import UpdateMovies from './pages/admin/UpdateMovies';
import Home from './pages/Home';
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
            <Route path="/" exact component={Home} />
            <Route path="/admin" component={ManageMovies} />
            <Route path="/create-movie" component={CreateMovie} />
            <Route path="/update-movies/:id" component={UpdateMovies} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
