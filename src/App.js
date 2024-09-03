
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Create from './Create';
import Home from './components/Home';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/Create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;