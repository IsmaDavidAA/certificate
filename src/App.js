import React from 'react';
import './App.css';
import { AuthProvider } from './Context';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect,
} from 'react-router-dom';
import Login from './Views/Login';
import Home from './Views/Home';
import Nav from './components/Nav';
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Nav></Nav>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={Home} />
            <Redirect path="/" exact component={Home} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
