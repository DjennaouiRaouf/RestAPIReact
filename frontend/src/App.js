import NavBar from "./Components/Base/NavBar";
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import "./pulse.css";
import "./float.css"
function App() {
  return (
    <div className="App">

        <Router>
            <Switch>
                <Route exact path='/' component={NavBar}/>
                <Route  path='*' component={Error}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
