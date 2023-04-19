import NavBar from "./NavBar";
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">

        <Router>
                <Switch>
                  <Route exact path='/' component={NavBar}/>

                </Switch>
            </Router>
    </div>
  );
}

export default App;
