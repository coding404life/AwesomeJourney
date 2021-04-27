import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from '../user/pages/User';
import NewPlaces from '../places/pages/NewPlaces';
import { MainNavigation } from '../shared';
import './App.css';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path='/' exact>
            <Users />
          </Route>
          <Route path='/places/new' exact>
            <NewPlaces />
          </Route>
          <Redirect to='/' />
        </Switch>
      </main>

    </Router>
  );
}

export default App;