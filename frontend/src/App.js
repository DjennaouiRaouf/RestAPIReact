import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import "./pulse.css";
import "./float.css"
import Cv from "./Components/Page/Cv";
import Info from "./Components/Page/Info";
import Error from "./Components/Base/Error";
function App() {
  return (
    <div className="App">

        <Router>
            <Switch>
                <Route exact path='/' component={Cv}/>
                <Route  path='/cv' component={Cv }/>
                <Route  path='/information' component={Info}/>
                <Route  path='*' component={Error}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
