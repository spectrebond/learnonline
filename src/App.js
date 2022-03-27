import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import Document from './Document';
import Uploaded from './Uploaded';
import Users from './Users';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/users'>
            <Users />
          </Route>
          <Route exact path='/uploaded'>
            <Uploaded />
          </Route>
          <Route exact path='/docs'>
            <Document />
          </Route>
          <Route exact path='/videos'>
            <Home/>
          </Route>        
          <Route exact path="/">
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
